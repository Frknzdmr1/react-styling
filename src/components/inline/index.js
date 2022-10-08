import React from 'react';
import { myStyles } from './styles';

const stylesObj = {
  color: 'blue',
  backgroundColor: '#e0e0e0',
  fontWeight: 'lighter',
};

function Inline() {
  return (
    <>
      <div
        style={{
          color: 'purple',
          backgroundColor: '#e0e0e0',
          fontWeight: 'bold',
        }}
      >
        This is an Inline Styling Component
      </div>
      <div style={stylesObj}>
        Inline components with constant javascript object
      </div>
      <div style={myStyles.div}>Inline styling with third option</div>
    </>
  );
}

export default Inline;