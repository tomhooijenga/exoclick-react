import React from 'react';
import { MainContainer as BaseMainContainer } from 'gatsby-theme-docz/src/components/MainContainer';
// relative from '<root>/.docz/src'
import { Adblock } from '../../../../src';

const style = {
  padding: '1rem',
  marginBottom: '2rem',
  background: '#B3FFFC',
  borderRadius: '0.5rem',
};

export const MainContainer: React.FC = ({ children }) => (
  <BaseMainContainer>
    <Adblock>
      {({ blocked }) =>
        blocked && (
          <section style={style}>
            Hi! It seems you are using adblock. That is cool, but most <i>examples won't work</i>.
          </section>
        )
      }
    </Adblock>
    {children}
  </BaseMainContainer>
);