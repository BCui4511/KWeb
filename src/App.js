import React from 'react';
import './App.css';
import DataIntro from './DataIntro/DataIntro';
import VisualController from './VisualController/VisualController';
import ModuleContainer from './ModuleContainer/ModuleContainer';
import Parameter from './Parameter/Parameter';
import DataSource from './DataSource/DataSource';
import DataRange from './DataRange/DataRange';
import CalcuInfo from './CalcuInfo/CalcuInfo';
import DateStatistic from "./DateStatistic/DateStatistic";
import Map from "./Map/Map";


function App() {
  return (
    <div>
      <Map />
      <div className="left-moudles">
        <ModuleContainer  title="点数据展示模块" >
          <VisualController />
        </ModuleContainer>
        <ModuleContainer  title="点数据概况" >
          <DataIntro />
        </ModuleContainer>
        <ModuleContainer  title="时间统计" autowidth="true" dark="true">
          <DateStatistic />
        </ModuleContainer>
      </div>
      <div className="right-moudles">
        <ModuleContainer  right="true" title="数据源" close="true">
          <DataSource />
        </ModuleContainer>
        <ModuleContainer  right="true" title="研究范围" close="true">
          <DataRange />
        </ModuleContainer>
        <ModuleContainer  right="true" title="参数选择" >
          <Parameter />
        </ModuleContainer>
        <ModuleContainer  right="true" title="计算信息" >
          <CalcuInfo />
        </ModuleContainer>
      </div>
    </div>
  );
}

export default App;
