import React from 'react';
import GoogleMap from '../Containers/GoogleMap';

//let lat = 37.774929;
//let lng = -122.419416;

const MEXICO = {
  lat:19.4326077,
  lng:-99.13320799999997
};

function GoogleMapContent() {
  function handleError(err){
      console.log(`Request failed: ${err}`);
  }

  return(
    <div style={
      {
        width: '100%',
        textAlign: 'center'
        //height: '150px'
      }
    }>
      <GoogleMap lat={MEXICO.lat} lng={MEXICO.lng} />
    </div>
  );
}

export default GoogleMapContent;
