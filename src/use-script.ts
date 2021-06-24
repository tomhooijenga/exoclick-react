import { useEffect, useState } from 'react';

type LoadingState = Promise<void> | 'done';
type Options = {
  inline: boolean;
  singleton: boolean;
};

const loadingMap = new Map<string, LoadingState>();
const defaultOptions = {
  inline: false,
  batch: true,
} as const;

export function useScript(
  src: string,
  options: Partial<Options> = {},
  attributes: Record<string, string> = {},
): { loading: boolean } {
  options = { ...defaultOptions, ...options };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (options.singleton) {
      const state = loadingMap.get(src);
      if (state !== undefined) {
        if (state === 'done') {
          setLoading(false);
        } else {
          state.then(() => {
            setLoading(false);
          });
        }

        return;
      }
    }

    const script = document.createElement('script');

    Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));

    if (options.inline) {
      loadingMap.set(src, Promise.resolve());
      setLoading(true);

      queueMicrotask(() => {
        loadingMap.set(src, 'done');
        setLoading(false);
      });

      script.text = src;
    } else {
      const promise = new Promise<void>((resolve) => {
        script.onload = () => {
          setLoading(false);
          loadingMap.set(src, 'done');
          resolve();
        };
      });

      loadingMap.set(src, promise);
      setLoading(true);

      script.src = src;
    }

    document.body.appendChild(script);

    return () => {
      loadingMap.delete(src);
      script.remove();
    };
  }, [src]);

  return { loading };
}