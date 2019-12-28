import React from 'react';
import './App.css';
import Area from './Area/Area';
import Life from './demo/Live';
import Parameter from './Parameter/Parameter';
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
      <MouduleContainer left="true" title="参数选择" >
        <Parameter />
      </MouduleContainer>
    </div>
  );
}

export default App;
