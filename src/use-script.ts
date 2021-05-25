import { useEffect, useState } from 'react';

type LoadingState = Promise<void> | 'done';
const loadingMap = new Map<string, LoadingState>();

export function useScript(src: string): { loading: boolean } {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    const script = document.createElement('script');

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

    document.body.appendChild(script);

    return () => {
      loadingMap.delete(src);
      script.remove();
    };
  }, [src]);

  return { loading };
}
