import React from 'react';
import './App.css';
import DataIntro from './DataIntro/DataIntro';
import VisualController from './VisualController/VisualController';
import ModuleContainer from './ModuleContainer/ModuleContainer';
import Parameter from './Parameter/Parameter';


function App() {
  return (
    <div>
      <div className="left-moudles">
        <ModuleContainer  title="点数据展示模块" >
          <VisualController />
        </ModuleContainer>
        <ModuleContainer  title="点数据概况" >
          <DataIntro />
        </ModuleContainer>
      </div>
      <div className="right-moudles">
        <ModuleContainer  title="参数选择" >
          <Parameter />
        </ModuleContainer>
      </div>
    </div>
  );
}

export default App;
