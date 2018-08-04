import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ButtonsList from './ButtonsList'
import FavoriteStores from './FavoriteStores';
import stores from '../store_directory.json';

//MEXICO lat and lng
const MEXICO = {
  lat:19.4326077,
  lng:-99.13320799999997
};
const apiKey='AIzaSyB105dodAGRSd2mnUidq52DuWUzteUk0aQ';//'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';//'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A';

var zeroRes=0;

class GoogleMap extends Component {
  state = {
    sMap: null,
    currentLocation: {
      lat: MEXICO.lat,
      lng: MEXICO.lng
    },
    zoom: 16,
    favoriteStores: []
  }

  //We wait until the component is already mounted to load the Google Maps API
  componentDidMount(){
    window.initMap = this.initMap;
    let api='https://maps.googleapis.com/maps/api/js?key='+ apiKey +'&callback=initMap';
    asynchronousLoadAPI(api);
  }

  //function to initialize the map and the geocoder from the API
  initMap=(geocoder, map)=>{
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(findDOMNode(this.refs.div_google_map),
    {
        center: this.state.currentLocation,
        zoom: this.state.zoom
    })
    var counter=0;
    var waitTimeMS=0;

    for(let i=0; i<stores.length; i++){
      if(counter==5){counter=0;waitTimeMS+=5000; /*console.log("-->",waitTimeMS);*/}
      else {
        setTimeout(()=>{
          this.codeAddress(geocoder,map,stores[i].Name,stores[i].Address,stores[i].Id);
          //console.log('executing...  | zeroRes', zeroRes);
        },waitTimeMS);
      }
      counter++;
    }
    this.setState({sMap:map});
  }

  //function to search the geomtry location of an specific address and generate the marker and the infowindow
  codeAddress=(geocoder, map, name, address,id)=>{
    geocoder.geocode( { 'address': address}, (results, status) => {
      //console.log("results",results);
      if (status == 'OK') {
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: name
        });
        var infowindow = new google.maps.InfoWindow({
          //<span>location: ${results[0].geometry.location}</span>
          content: `<h3>${name}</h3>
          <span>Click to add as favorite</span>`
        });
        marker.addListener('mouseover', function() {
          infowindow.open(map, marker);
        });
        marker.addListener('mouseout', function() {
          infowindow.close(map, marker);
        });
        marker.addListener('click', ()=> {
          //validate that the store is not in the list
          var position=results[0].geometry.location;
          //alert(`${name} has been added to your favorite stores.`);
          //console.log(`${name} added to the favorite stores list.`);
          var payload={id,name,position}
          this.handleAddFavorite(payload);
        });
      }
      else if (status == 'ZERO_RESULTS') {
        zeroRes++;
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  //function to add place to the favorite list
  handleAddFavorite=(payload)=>{
    var item = this.state.favoriteStores.find(item => item.id === payload.id);
    if(item){
      //console.log("item->",item);
      //alert(`${payload.name} is already in your favorite stores!`);
      alert(`This place is already in your favorite stores!`);
      this.centerMap(this.state.sMap,payload.position);
    }else{
      alert(`${payload.name} has been added to your favorite stores! =)`);
      //console.log("item not found!");
      var arr=this.state.favoriteStores;
      //console.log('arr-->' + arr);
      var newFavorite={
        id:payload.id,
        name:payload.name,
        location:payload.position
      }
      arr.push(newFavorite);
      //console.log('new arr-->' + arr);
      this.setState({
          favoriteStores: arr
      })
    }
    console.log(`${payload.name} with Id:${payload.id} was added to Favorite Stores! =)`);
    //console.log("actualState--->",this.state);
    //console.log('state-->',this.state);
  }

  //function to remove place from the favorite list
  handleRemoveFavorite=(id)=>{
    if(confirm("Are you sure to remove this place?")) {
      var arr=this.state.favoriteStores;
      //console.log('arr-->', arr);
      arr = arr.filter(item => item.id !== id)
      //var item = this.state.favoriteStores.find(item => item.id === id);
      //console.log('new arr-->',arr);
      this.setState({
          favoriteStores: arr
      })
      console.log(`The Store with id:${id} was added removed from Favorite Stores`);
    }
    else return false;

  }

  /*centerGoogleMapInMexicoCity=()=>{
    console.log(this.state);
    this.setState({
      currentLocation: {
        lat:MEXICO.lat,
        lng:MEXICO.lng
      }
    })
    //initMap();
    this.centerMap(this.state.sMap,this.state.currentLocation);
  }*/

  //function to center the map in our current location
  centerGoogleMapInCurrentLocation=()=>{
    //console.log(this.state);
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
              currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
              }
          })
          //initMap();
          //console.log("map1",this.state.sMap);
          //this.centerMap(this.state.sMap);
          this.centerMap(this.state.sMap,this.state.currentLocation);
      })
    }
  }

  //function to center the map in specific location
  centerMap=(map,location)=>{
    /*this.setState({
        zoom:16
    })*/
    //map.setCenter(this.state.currentLocation);
    map.setCenter(location);
    //map.setZoom(this.state.zoom);
    map.setZoom(16);
    /* //Add marker to the currentLocation stored in the state
    let marker = new window.google.maps.Marker({
      map: map,
      //position: {lat: MEXICO.lat, lng: MEXICO.lng},
      position: this.state.currentLocation,
      title: 'Current Location'
    });
    */
  }

  render() {
    var google;
    var map;
    var geocoder;

    const mapStyle={
      width: '95%',
      height: 350,
      border: '1px solid blue',
      margin: '0 auto'
    }

    return (
      <div>
        <div ref='div_google_map' style={ mapStyle }>
          Loading map...
        </div>
        <ButtonsList handleFindCurrentLocation={this.centerGoogleMapInCurrentLocation}/>
        <FavoriteStores storesList={this.state.favoriteStores} map={this.state.sMap} centerMap={this.centerMap} removeFavorite={this.handleRemoveFavorite}/>
      </div>
    );
  }
}

//function to add script tag to the document to load the Google Maps API
function asynchronousLoadAPI(src){
  var elem=window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src=src;
  script.async=true;
  elem.parentNode.insertBefore(script,elem);
}

export default GoogleMap;
