import { baseProps } from '../../base-props';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { useScript } from '../../use-script';
import { prepareZoneId } from '../../zone-id';

const propTypes = {
  ...baseProps,
};

type RecommendationWidgetProps = PropTypes.InferProps<typeof propTypes>;

export const RecommendationWidget: React.FC<RecommendationWidgetProps> = React.memo(function RecommendationWidget({
  zoneId,
  sub,
  sub2,
  sub3,
  keywords,
}) {
  const [divRef, setDivRef] = useState<HTMLDivElement | null>(null);

  const attributes = useMemo(
    () =>
      Object.fromEntries(
        [
          ['data-idzone', prepareZoneId(zoneId, 'recommendation')],
          ['data-sub', sub],
          ['data-sub2', sub2],
          ['data-sub3', sub3],
          ['data-ad_tags', keywords?.join(',')],
        ].filter(([, value]) => !!value),
      ),
    [zoneId, sub, sub2, sub3, keywords],
  );

  useScript(
    'https://a.realsrv.com/nativeads-v2.js',
    {
      singleton: false,
      target: divRef,
    },
    attributes,
  );

  useEffect(() => {
    return () => {
      if (!divRef) {
        return;
      }
      [...divRef.children].forEach((child) => child.remove());
    };
  }, [attributes]);

  return <div ref={(div) => setDivRef(div)}></div>;
});
