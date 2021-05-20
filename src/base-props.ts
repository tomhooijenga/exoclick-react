import PropTypes from 'prop-types';

const subProp = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const baseProps = {
  zoneId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sub: subProp,
  sub2: subProp,
  sub3: subProp,
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired),
};