import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { baseProps } from '../../base-props';
import { useScript } from '../../use-script';

const propTypes = {
  ...baseProps,

  /**
   * How many times a link must be clicked to show the first interstitial. Defaults to 1.
   */
  firstTriggerClicks: PropTypes.number,

  /**
   * How many times a link must be clicked to show after the initial show.
   */
  nextTriggerClicks: PropTypes.number,

  /**
   * List of classes that count for the trigger clicks.
   */
  triggerClass: PropTypes.arrayOf(PropTypes.string.isRequired),
  /**
   * How often to show the ad in the given period.
   */
  frequencyCount: PropTypes.number,

  /**
   * Once closed, stay hidden for this amount of minutes. Defaults to 720 (12 hours).
   */
  frequencyPeriod: PropTypes.number,

  /**
   * How to limit the display of interstitials.
   */
  frequencyType: PropTypes.oneOf<'clicks' | 'time'>(['clicks', 'time']).isRequired,
};

type FullpageInterstitialProps = PropTypes.InferProps<typeof propTypes>;

export const FullpageInterstitial: React.FC<FullpageInterstitialProps> = React.memo(function FullpageInterstitial(
  props,
) {
  const attributes = useMemo(() => {
    const attributes = Object.fromEntries(
      [
        ['data-idzone', props.zoneId.toString()],
        ['data-sub', props.sub],
        ['data-sub2', props.sub2],
        ['data-sub3', props.sub3],
        ['data-ad_tags', props.keywords?.join(',')],
      ].filter(([, value]) => !!value),
    );

    if (props.frequencyType === 'time') {
      Object.assign(attributes, {
        'data-ad_frequency_count': props.frequencyCount,
        'data-ad_frequency_period': props.frequencyPeriod,
      });
    } else {
      Object.assign(attributes, {
        'data-ad_first_trigger_clicks': props.firstTriggerClicks,
        'data-ad_next_trigger_clicks': props.nextTriggerClicks,
        'data-ad_trigger_method': props.triggerClass?.length ? '2' : '3',
        'data-ad_trigger_class': props.triggerClass?.join(', '),
      });
    }
    return attributes;
  }, [
    props.zoneId,
    props.sub,
    props.sub2,
    props.sub3,
    props.keywords,
    props.frequencyType,
    props.frequencyCount,
    props.frequencyPeriod,
    props.firstTriggerClicks,
    props.nextTriggerClicks,
    props.triggerClass,
  ]);

  const { loading } = useScript('https://a.realsrv.com/fp-interstitial.js', { singleton: false }, attributes);

  useEffect(() => {
    if (loading) {
      return;
    }

    return () => {
      document.getElementById(`ad_${props.zoneId}`)?.remove();
      document.getElementById(`ad_${props.zoneId}_css`)?.remove();
    };
  });

  return null;
});

FullpageInterstitial.propTypes = propTypes;