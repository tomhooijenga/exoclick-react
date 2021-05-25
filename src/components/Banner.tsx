import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useScript } from '../use-script';
import { baseProps } from '../base-props';

const propTypes = {
  ...baseProps,
};

type BannerProps = PropTypes.InferProps<typeof propTypes>;

export const Banner: React.FC<BannerProps> = React.memo(function Banner({ zoneId, sub, sub2, sub3, keywords }) {
  useScript('https://a.realsrv.com/ad-provider.js');

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.AdProvider.push({ serve: {} });

    return () => {
      if (!divRef.current) {
        return;
      }

      [...divRef.current.children].forEach((child) => {
        if (child.tagName === 'INS') {
          child.removeAttribute('data-processed');
        } else {
          child.remove();
        }
      });
    };
  }, [zoneId, sub, sub2, sub3, keywords]);

  return (
    <div ref={divRef}>
      <ins
        className="adsbyexoclick"
        data-zoneid={zoneId}
        data-sub={sub}
        data-sub2={sub2}
        data-sub3={sub3}
        data-keywords={keywords?.join(',')}
      />
    </div>
  );
});

Banner.propTypes = propTypes;
