import { ExoOutstream } from './index';

declare global {
  interface Window {
    AdProvider: {
      push(options: { serve: unknown }): void;
    };

    ExoOutstream: {
      new (): ExoOutstream;
    };
  }
}
