import PropTypes from 'prop-types';

const subProp = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const baseProps = {
  /**
   * Zone identifier.
   */
  zoneId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Custom id to segment traffic. Six to ten digits, without leading zeros.
   */
  sub: subProp,
  /**
   * Custom id to segment traffic. Six to ten digits, without leading zeros.
   */
  sub2: subProp,
  /**
   * Custom id to segment traffic. Six to ten digits, without leading zeros.
   */
  sub3: subProp,
  /**
   * List of keywords to allow advertisers to target your zone.
   */
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired),
};