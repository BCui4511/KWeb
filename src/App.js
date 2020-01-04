import React from 'react';
import './App.css';
import Area from './Area/Area';
import VisualController from './VisualController/VisualController';
import ModuleContainer from './ModuleContainer/ModuleContainer';
import Parameter from './Parameter/Parameter';


function App() {
  return (
    <div className="App">
      <ModuleContainer left="true" title="点数据展示模块" >
        <VisualController />
      </ModuleContainer>
      <ModuleContainer left="true" title="点数据概况" >
        <Area />
      </ModuleContainer>
      <ModuleContainer left="true" title="参数选择" >
        <Parameter />
      </ModuleContainer>
    </div>
  );
}

export default App;
