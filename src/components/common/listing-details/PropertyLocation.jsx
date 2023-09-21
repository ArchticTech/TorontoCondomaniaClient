import Image from "next/image";
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiaHV6YWlmYTUzIiwiYSI6ImNsbXJmOW1iOTA3Nm4ybHFtN2V0bHV0dG8ifQ.9a5LJmvzUyGGCH1Av-TKbA';

const PropertyLocation = ({latitude, longitude}) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-80.042869, 43.718371],
      zoom: 7
    });

    setMarkerOnMap(map);

    // Clean up the map instance when the component unmounts
    return () => map.remove();
  }, []);

    const setMarkerOnMap = (map) => {
        
      const marker = new mapboxgl.Marker({
          color: '#6449e7', // Marker color
          draggable: false, // Allow the user to drag the marker
      })
      .setLngLat([longitude, latitude])
      .addTo(map);

      map.flyTo({
          center: [longitude, latitude], // Marker's coordinates
          zoom: 15,     // Desired zoom level
          essential: true      // Set to true for smooth animation
      });
  }
  return (
    <>
      <div className="thumb">
        <div className="h400" id="map-canvas">
          <div className="gmap_canvas">
            <div id="mapbox"></div>;
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyLocation;
