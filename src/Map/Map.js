import React from 'react';
import './Map.css';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import {GridCellLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
// 1003个feature
// import jsonData from './data/95_2_10_84.json';
// import gridData from './cq3d.json';
// const gridData = jsonData.features;

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYmlsbGN1aSIsImEiOiJjampsYjZpbzQwcm1mM3FwZmppejRzMmNiIn0.Ch9L9-zpzaC21Vm8yxoWpg';

const initialViewState = {
  longitude: 107.5,
  latitude: 29.8,
  zoom: 7,
  pitch: 0,
  bearing: 0
};
let ID = 0;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.jsonDataCache = {}
    this.state = {
      id: 0,
      layers: this.getLayers()
    };
  };
  componentDidUpdate(prevProps){
    if(this.isPropsChange(prevProps)){
      ID++;
      this.setState({layers: this.getLayers()});
    }
  } 

  isPropsChange = (prevProps) => {
    let isChange =  prevProps.dimension !== this.props.dimension;
    const keys = ['isRShow', 'isGShow', 'isBShow', 'RContent', 'GContent', 'BContent'];
    for (let i = 0; i < 6; i++) {
      isChange = isChange || (prevProps.colorObj[keys[i]] !== this.props.colorObj[keys[i]]);
    }
    isChange = isChange || prevProps.scale !== this.props.scale;
    return isChange;
  }

  _renderTooltip() {
    const {hoveredMessage, pointerX, pointerY} = this.state || {};
    return hoveredMessage && (
      <div style={{position: 'absolute', zIndex: 999, pointerEvents: 'none', left: pointerX, top: pointerY, color: '#fff', backgroundColor: 'rgba(100,100,100,0.5)'}}>
        { hoveredMessage }
      </div>
    );
  }

  getLayers = () => {
    console.log(this.props.colorObj.isRShow);
    return this.props.dimension === 3 ? [this.get3Dlayer()] : [this.get2Dlayer()];
  }

  loadJsonData = (path) => {
    let jsonData = this.jsonDataCache[path];
    if(!jsonData) {
      jsonData = require(`${path}`);
      this.jsonDataCache[path] = jsonData;
    }
    return jsonData;
  }

  getFillColorArray = (d) => {
    const {isRShow, isGShow, isBShow, RContent, GContent, BContent} = this.props.colorObj;
    const indus1 = d.Join_Count || 0;
    const indus2 = d.Join_Cou_1 || 0;
    const indus3 = d.Join_Cou_2 || 0;
    const r = isRShow ? indus1*255/500 : 0;
    const g = isGShow ? indus2*255/500 : 0;
    const b = isBShow ? indus3: 0;
    return [r, g, b,  r+g+b > 0 ? 150 :0];
  } ;

  getElevationValue = (d) => {
    const {isRShow, isGShow, isBShow, RContent, GContent, BContent} = this.props.colorObj;
    const indus1 = d.Join_Count || 0;
    const indus2 = d.Join_Cou_1 || 0;
    const indus3 = d.Join_Cou_2 || 0;
    const value = (isRShow ? indus1 : 0) +  (isGShow ? indus2 : 0) +(isBShow ? indus3 : 0);
    return value;
  }

  get2Dlayer = () => {
    const {isRShow, isGShow, isBShow} = this.props.colorObj;
    if(!(isRShow || isGShow || isBShow)) {
      return null;
    }
    let jsonData = this.loadJsonData('./data/125_1_10000.json');
    return new GeoJsonLayer({
      id: ID,
      data: jsonData,
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: (d) => {return this.getFillColorArray(d.properties)},
      getRadius: 100,
      getLineWidth: 1,
      getElevation: 30,
      onHover: ({color, index, x, y}) => {
        const properties = jsonData.features[index] && jsonData.features[index].properties;
        const tooltip = `第一产业: ${properties&&properties.Join_Count} 第二产业: ${properties&&properties.Join_Cou_1}`;
        this.setState({
          hoveredMessage: tooltip,
          pointerX: x,
          pointerY: y,
        });
      }
    });
  }

  get3Dlayer = () => {
    const {isRShow, isGShow, isBShow} = this.props.colorObj;
    if(!(isRShow || isGShow || isBShow)) {
      return null;
    }
    let jsonData = this.loadJsonData('./data/125_1_10000.json');
    let gridData = jsonData.features;
    return new GridCellLayer({
      id: ID,
      data: gridData,
      pickable: true,
      extruded: true,
      cellSize: 1000 * this.props.scale,
      elevationScale: 100,
      getPosition: (d) => {
        if(!d.geometry){
          return null;
        }
        const coords = d.geometry.coordinates[0];
        let mincoords = coords[0];
        coords.forEach(item => {
          mincoords[0] = item[0]<mincoords[0] ? item[0]: mincoords[0];
          mincoords[1] = item[1]<mincoords[1] ? item[1]: mincoords[1];
        });
        return mincoords;
      },
      getFillColor: (d) => {return this.getFillColorArray(d.properties);},
      getElevation: (d) => {return this.getElevationValue(d.properties);},
      onHover: ({color, index, x, y}) => {
        const properties = jsonData.features[index] && jsonData.features[index].properties;
        const tooltip = `第一产业: ${properties&& (properties.Join_Count?properties.Join_Count:0)} 第二产业: ${properties&&(properties.Join_Count?properties.Join_Cou_1:0)}`;
        this.setState({
          hoveredMessage: tooltip,
          pointerX: x,
          pointerY: y,
        });
      }
    });
  }
 
  render() {

    return <div>
        <div id="map">
          <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={this.state.layers}
          >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} mapStyle={'mapbox://styles/billcui/ck812rhuo0bv31iqs759izo8m'}/>
          { this._renderTooltip() }
          </DeckGL>
        </div>
      </div>
  }
}