import React, { useState } from 'react';
import LogicCircuit from './LogicCircuit';
import KMap from './KMap';
import NumberConverter from './NumberConverter';
import './Digital.css'

function Digital() {
  const [activeComponent, setActiveComponent] = useState('LogicCircuit'); // Initial component

  const handleSidebarClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="app row">
      <div className="sidebar col-3">
        <ul>
          <li className='sidebar-link' onClick={() => handleSidebarClick('LogicCircuit')}>Logic Circuit</li>
          <li className='sidebar-link' onClick={() => handleSidebarClick('KMap')}>K-Map</li>
          <li className='sidebar-link' onClick={() => handleSidebarClick('NumberConverter')}>Number Converter</li>
        </ul>
      </div>
      <div className="main-content col-9">
        {activeComponent === 'LogicCircuit' && <LogicCircuit />}
        {activeComponent === 'KMap' && <KMap />}
        {activeComponent === 'NumberConverter' && <NumberConverter />}
      </div>
    </div>
  );
}

export default Digital;