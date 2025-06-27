import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import  "leaflet/dist/leaflet.css" 

const MapComponent = () => {
    const position = [5.9885, 10.1841]
  return (
    <div className='ml-40 mt-10'>
<MapContainer center={position} zoom={13} style={{height:"600px", width:"70%"}}>
    <TileLayer
     url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
     attribution='&copy; OpenStreetMap contributors'
    />
   <Marker position={position}>
    <Popup>
        Bamenda, cameroon
    </Popup>

   </Marker>

   </MapContainer>
    </div>
   
  )
}

export default MapComponent;
