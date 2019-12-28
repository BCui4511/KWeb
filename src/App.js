import React from 'react';
import './App.css';
import Area from './Area/Area';
import Life from './demo/Live';
import ModuleContainer from './ModuleContainer/ModuleContainer';

function App() {
  return (
    <div className="App">
      <ModuleContainer left="true" title="点数据展示模块" >
        <Life />
      </ModuleContainer>
      <ModuleContainer left="true" title="点数据概况" >
        <Area />
      </ModuleContainer>
    </div>
  );
}

export default App;
