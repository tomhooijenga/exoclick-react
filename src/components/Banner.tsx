import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScript } from '../useScript';

const subProp = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const propTypes = {
  zoneId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sub: subProp,
  sub2: subProp,
  sub3: subProp,
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired),
};

type BannerProps = PropTypes.InferProps<typeof propTypes>;

export const Banner: React.FC<BannerProps> = ({ zoneId, sub, sub2, sub3, keywords }) => {
  useScript('https://a.realsrv.com/ad-provider.js');

  useEffect(() => {
    window.AdProvider.push({ serve: {} });
  }, [zoneId]);

  return (
    <div key={zoneId}>
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
};

Banner.propTypes = propTypes;