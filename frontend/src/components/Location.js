import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Location = () => {
  const [selectedPosition, setSelectedPosition] = useState({ lat: -1.6955, lng: 29.5572 });
  const [inputLocation, setInputLocation] = useState('');
  const [searching, setSearching] = useState(false);
const navigate=useNavigate()
  const handleConfirmLocation = async () => {
    try {
      setSearching(true); // Set searching state to true when geocoding begins
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputLocation)}`);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setSelectedPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });
        navigate('/home')
        
      } else {
        console.error('Location not found');
        alert("Location Not Found")
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
    } finally {
      setSearching(false); // Set searching state to false when geocoding is complete
    }
  };

  return (
    <div className='w-full flex'>
      <MapContainer key={`${selectedPosition.lat}-${selectedPosition.lon}`} center={selectedPosition} zoom={14} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={selectedPosition}>
          <Popup>
            A simple popup
          </Popup>
        </Marker>
      </MapContainer>
      <div className='fixed bottom-10 left-8 border-solid border-violet-950 flex flex-col bg-slate-600 w-11/12 rounded-lg p-5'>
        <div><h2 className='pl-24 text-1xl'>Select Your Location</h2></div><br />
        <div className='flex justify-evenly'>
          <div className='bg-slate-200 rounded-lg p-1 flex w-3/5'>
            <FaMapMarkerAlt className='pt-2 text-2xl text-slate-900' />
            <input
              type="text"
              placeholder='Shehadari road, Bangalore'
              className='w-full p-1 bg-transparent'
              value={inputLocation}
              onChange={(e) => setInputLocation(e.target.value)}
            />
            <FaSearch className='pt-2 text-2xl text-slate-900' />
          </div>
          <div>
            <button
              type='button'
              className='text-white bg-purple-950 hover:shadow-2xl p-2 pl-5 pr-5 rounded-lg text-1xl'
              onClick={handleConfirmLocation}
              disabled={searching} // Disable the button while searching
            >
              {searching ? 'Searching Place...' : 'Confirm Location'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;