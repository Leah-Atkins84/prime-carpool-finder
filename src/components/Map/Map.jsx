import mapboxgl from '!mapbox-gl';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibGVhaHByaW1lciIsImEiOiJjbDExZzYzb2IwM3N4M2ltd2RnNzIxeTR1In0.yppDphdayQ8fLVn_8Lsx2Q';


function Map() {
  const user = useSelector((store) => store.user);
  const geocoder = new MapboxGeocoder({accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl});
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(user.long);
  const [lat, setLat] = useState(user.lat);
  const [zoom, setZoom] = useState(9);
  const carpool = useSelector(store => store.carpool);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_CARPOOLS'})
    if (map.current) 
      return;
    

    // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [
        lng, lat
      ],
      zoom: zoom
    });

    // Add zoom and rotation controls to the map.
    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.addControl(geocoder);

    // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [dispatch])

  // Adding user locations to the map
  if (carpool && map.current) { 
    carpool.map(user => {
      const marker = new mapboxgl.Marker().setLngLat([user.long, user.lat]).addTo(map.current)
    })
  }
 
  return (
    <div>
      <div className="map-sidebar">
        Longitude: {lng}
        | Latitude: {lat}
        | Zoom: {zoom} </div>
      <div ref={mapContainer}
        className="map-container"/>
    </div>
  )

}

export default Map;
