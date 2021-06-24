import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Width of the banner.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * Height of the banner.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

type PlaceholderProps = PropTypes.InferProps<typeof propTypes>;

export const Placeholder: React.FC<PlaceholderProps> = React.memo(function Placeholder({ width, height, children }) {
  return <div style={{ width: `${width}px`, height: `${height}px` }}>{children}</div>;
});

Placeholder.propTypes = propTypes;