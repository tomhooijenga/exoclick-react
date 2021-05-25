import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScript } from '../../use-script';
import { baseProps } from '../../base-props';

const propTypes = {
  ...baseProps,
  /**
   * The format of the banner. This must be the same value as configured in ExoClick.
   */
  format: PropTypes.oneOf<'728x90' | '300x250' | '160x600' | '900x250'>(['728x90', '300x250', '160x600', '900x250'])
    .isRequired,
  /**
   * Vertical position. Defaults to bottom.
   */
  verticalPosition: PropTypes.oneOf<'top' | 'middle' | 'bottom'>(['top', 'middle', 'bottom']),
  /**
   * Horizontal position. Defaults to center.
   */
  horizontalPosition: PropTypes.oneOf<'left' | 'center' | 'right'>(['left', 'center', 'right']),
};

type StickyBannerProps = PropTypes.InferProps<typeof propTypes>;

export const StickyBanner: React.FC<StickyBannerProps> = React.memo(function StickyBanner({
  zoneId,
  format,
  horizontalPosition = 'center',
  verticalPosition = 'bottom',
  sub,
  sub2,
  sub3,
  keywords,
}) {
  const [width, height] = format.split('x');
  let script = `
    var ad_idzone = "${zoneId}";
    var ad_width = "${width}";
    var ad_height = "${height}";
    var v_pos = "${verticalPosition}";
    var h_pos = "${horizontalPosition}";
  `;

  if (sub) {
    script += `var ad_sub = ${sub};`;
  }
  if (sub2) {
    script += `var ad_sub2 = ${sub2};`;
  }
  if (sub3) {
    script += `var ad_sub3 = ${sub3};`;
  }
  if (keywords) {
    script += `var ad_tags = ${keywords.join(',')};`;
  }

  const { loading: loadingInline } = useScript(script, { inline: true });
  const { loading: loadingExternal } = useScript(`https://a.realsrv.com/js.php?t=17&idzone=${zoneId}`, {
    batch: false,
  });

  useEffect(() => {
    if (loadingInline || loadingExternal) {
      return;
    }

    return () => {
      document.getElementById(`sticky-banner-${zoneId}`)?.remove();
    };
  });

  return null;
});

StickyBanner.propTypes = propTypes;