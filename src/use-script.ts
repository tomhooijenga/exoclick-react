import { useEffect, useState } from 'react';

type LoadingState = Promise<void> | 'done';
type Options = {
  inline: boolean;
  singleton: boolean;
  target: HTMLElement | null;
};

const loadingMap = new Map<string, LoadingState>();
const defaultOptions: Options = {
  inline: false,
  singleton: true,
  target: typeof window === 'undefined' ? null : window.document.body,
} as const;

const EMPTY = {};

export function useScript(
  src: string,
  options: Partial<Options> = EMPTY,
  attributes: Record<string, string> = EMPTY,
): { loading: boolean } {
  const opts = { ...defaultOptions, ...options };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (opts.singleton) {
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

    if (opts.inline) {
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

    opts.target?.appendChild(script);

    return () => {
      loadingMap.delete(src);
      script.remove();
    };
  }, [src, opts.target, attributes]);

  return { loading };
}
