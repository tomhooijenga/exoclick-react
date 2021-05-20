export type ExoOutstream = {
  init(options: InitOptions): void;
};

export type InitOptions = {
  idzone: number;
  frequency_period?: number;
  branding_enabled?: 0 | 1;
  sub?: number;
  sub2?: number;
  sub3?: number;
  cat?: number;
  tags?: string;
  maximum_width?: number;
  script?: HTMLScriptElement;
};