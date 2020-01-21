import React from 'react';
import './Map.css';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import {GridCellLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
import jsonData from './95_2_1_84.json';
import gridData from './hexagons.json';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYmlsbGN1aSIsImEiOiJjampsYjZpbzQwcm1mM3FwZmppejRzMmNiIn0.Ch9L9-zpzaC21Vm8yxoWpg';

const initialViewState = {
  longitude: -122.40324,
  latitude: 37.79088771,
  zoom: 13,
  pitch: 0,
  bearing: 0
};


export default class Map extends React.Component {
  _renderTooltip() {
    const {hoveredMessage, pointerX, pointerY} = this.state || {};
    return hoveredMessage && (
      <div style={{position: 'absolute', zIndex: 999, pointerEvents: 'none', left: pointerX, top: pointerY, color: '#fff', backgroundColor: 'rgba(100,100,100,0.5)'}}>
        { hoveredMessage }
      </div>
    );
  }

  getFillColorArray = () => {
    return [Math.random()*255, Math.random()*255, Math.random()*255, 100];
  } ;
 
  render() {
    const layer1 = new GeoJsonLayer({
      id: 'geojson-layer',
      data: jsonData,
      pickable: true,
      stroked: false,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: () => {return this.getFillColorArray()},
      getRadius: 100,
      getLineWidth: 1,
      getElevation: 30,
      onHover: ({color, index, x, y}) => {
        // const tooltip = jsonData.features[index] && jsonData.features[index].properties.GiZScore;
        this.setState({
          hoveredMessage: jsonData.features[index] && jsonData.features[index].properties.GiZScore,
          pointerX: x,
          pointerY: y,
        });
      }
    });
    const layer2 = new GridCellLayer({
      id: 'grid-cell-layer',
      data: gridData,
      pickable: true,
      extruded: true,
      cellSize: 200,
      elevationScale: 5000,
      getPosition: d => d.centroid,
      getFillColor: d => [48, 128, d.value * 255, 255],
      getElevation: d => d.value,
      onHover: ({object, x, y}) => {
      }
    });

    return <div>
        <div id="map">
          <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={[layer1, layer2]}
          >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
          { this._renderTooltip() }
          </DeckGL>
        </div>
      </div>
  }
}