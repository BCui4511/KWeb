import React from 'react';
import './App.css';
import Area from './Area/Area';
import Life from './demo/Live';
import MouduleContainer from './MouduleContainer/MouduleContainer';

function App() {
  return (
    <div className="App">
      <MouduleContainer left="true" title="点数据展示模块" >
        <Life />
      </MouduleContainer>
      <MouduleContainer left="true" title="点数据概况" >
        <Area />
      </MouduleContainer>
    </div>
  );
}

export default App;
