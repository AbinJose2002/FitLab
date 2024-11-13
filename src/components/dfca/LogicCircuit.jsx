import React from 'react';
import IFrame from 'react-iframe';

function LogicCircuit() {
  return (
    <div>
      <IFrame
        url="http://localhost:3001"
        width="100%"
        height="700px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default LogicCircuit;