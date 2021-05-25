import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useScript } from '../use-script';
import { baseProps } from '../base-props';
import { InitOptions } from '../types';

const propTypes = {
  ...baseProps,
  cat: PropTypes.number,
  frequency: PropTypes.number,
  branding: PropTypes.bool,
  maxWidth: PropTypes.number,
};

type OutstreamProps = PropTypes.InferProps<typeof propTypes>;

export const Outstream: React.FC<OutstreamProps> = React.memo(function Outstream({
  zoneId,
  sub,
  sub2,
  sub3,
  cat,
  frequency,
  branding,
  maxWidth,
  keywords,
}) {
  const { loading } = useScript('https://a.realsrv.com/video-outstream.js');

  const divRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement>(null);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!scriptRef.current) {
      return;
    }

    const config: InitOptions = {
      idzone: +zoneId,
      script: scriptRef.current,
    };

    if (sub != null) {
      config.sub = +sub;
    }
    if (sub2 != null) {
      config.sub2 = +sub2;
    }
    if (sub3 != null) {
      config.sub3 = +sub3;
    }
    if (cat != null) {
      config.sub = +cat;
    }
    if (frequency != null) {
      config.frequency_period = +frequency;
    }
    if (maxWidth != null) {
      config.maximum_width = +maxWidth;
    }
    if (branding != null) {
      config.branding_enabled = branding ? 1 : 0;
    }
    if (Array.isArray(keywords)) {
      config.tags = keywords.join(',');
    }

    new window.ExoOutstream().init(config);

    return () => {
      if (!divRef.current) {
        return;
      }

      [...divRef.current.children].forEach((child) => {
        if (child.tagName !== 'SCRIPT') {
          child.remove();
        }
      });
    };
  });

  return (
    <div ref={divRef}>
      <script ref={scriptRef}></script>
    </div>
  );
});
