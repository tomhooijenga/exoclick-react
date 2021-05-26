import React, { CSSProperties, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired,
};

type AdblockProps = PropTypes.InferProps<typeof propTypes>;

const style: CSSProperties = {
  width: '1px',
  height: '1px',
  position: 'absolute',
  left: '-10000px',
  top: '-1000px',
  boxSizing: 'content-box',
  borderWidth: '0px',
};

export const Adblock: React.FC<AdblockProps> = React.memo(function Adblock({ children }) {
  const id = Math.floor(Math.random() * (10000 - 123 + 1)) + 123;

  const [blocked, setBlocked] = useState(false);
  const iframeRef = useCallback((iframe) => {
    const isBlocked =
      iframe === null ||
      iframe.style.display === 'none' ||
      iframe.style.display === 'hidden' ||
      iframe.style.visibility === 'hidden' ||
      iframe.offsetParent === null ||
      iframe.offsetHeight === 0 ||
      iframe.offsetLeft === 0 ||
      iframe.offsetTop === 0 ||
      iframe.offsetWidth === 0 ||
      iframe.clientHeight === 0 ||
      iframe.clientWidth === 0;

    setBlocked(isBlocked);
  }, []);

  return (
    <>
      {children({ blocked })}
      {ReactDOM.createPortal(
        <iframe
          ref={iframeRef}
          id={`adsbox_ex_${id}`}
          className="adsBox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"
          width="1px"
          height="1px"
          style={style}
        />,
        document.body,
      )}
    </>
  );
});

Adblock.propTypes = propTypes;