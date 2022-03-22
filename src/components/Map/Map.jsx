import mapboxgl from '!mapbox-gl';
import React, {useEffect, useRef, useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibGVhaHByaW1lciIsImEiOiJjbDExZzYzb2IwM3N4M2ltd2RnNzIxeTR1In0.yppDphdayQ8fLVn_8Lsx2Q';


function Map() {
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-93.2501);
    const [lat, setLat] = useState(44.9362);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
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

        const marker = new mapboxgl.Marker()
        .setLngLat([ -93.1274, 44.9712 ])
        .addTo(map.current)
    });

    useEffect(() => {
        if (! map.current) 
            return;
        
        // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

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
