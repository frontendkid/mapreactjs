import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest-plus';
import './App.css';
import './geosuggest.css';
import './lib/bootstrap.min.css';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

class Map extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  onSuggestSelect(suggest) {

  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <form>
            <div className="form-group row">
              <label className="col-xs-12">Diem Di:</label>
                <Geosuggest
                onSuggestSelect={this.onSuggestSelect} />
            </div>
            <div className="form-group row">
              <label className="col-xs-12">Diem Den:</label>
              <input className="col-xs-12" type="text" placeholder='Dien diem den'/>
            </div>

          </form>
        </div>
        <div className="col-md-8">

        <Gmaps
          width={'100%'}
          height={'600px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          loadingMessage={'Be happy'}
          params={{v: '3.exp', key: 'AIzaSyBPzJ3EQ_xFg1wiS5VIw6it8XZzvEtgsMw'}}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable={true}
            onDragEnd={this.onDragEnd} />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'Hello, React :)'}
            onCloseClick={this.onCloseClick} />
          <Circle
            lat={coords.lat}
            lng={coords.lng}
            radius={500}
            onClick={this.onClick} />
        </Gmaps>
        </div>
      </div>
    );
  }
}

export default Map;
