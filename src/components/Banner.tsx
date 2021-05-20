import React from 'react';
import PropTypes from 'prop-types';

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
  return (
    <ins
      className="adsbyexoclick"
      data-zoneid={zoneId}
      data-sub={sub}
      data-sub2={sub2}
      data-sub3={sub3}
      data-keywords={(keywords || []).join(',')}
    />
  );
};

Banner.propTypes = propTypes;