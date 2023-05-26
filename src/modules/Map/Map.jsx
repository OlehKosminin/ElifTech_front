import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  const mapRef = useRef(null);
  const defaultCenter = { lat: 51.5074, lng: -0.1278 };
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();

    setSelectedPlace({ lat, lng });
  };

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: defaultCenter,
      zoom: 13,
    });

    new window.google.maps.Marker({ position: defaultCenter, map });
  }, []);

  return <div ref={mapRef} style={{ width: "400px", height: "400px" }} />;
};

export default Map;
