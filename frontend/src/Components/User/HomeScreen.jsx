import React, { useState,useEffect } from 'react'
import Header from './Header'
import { Button } from "react-bootstrap";
import './User.css';
import Footer from './Footer'
import axios from 'axios';







function HomeScreen() {

  const [query, setQuery] = useState('');
  const [suggestions,setSuggestions]=useState()


  useEffect(() => {
    if (query.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`, {
            params: {
              access_token: 'pk.eyJ1IjoibW9pZGhlZW5zdWhhaXIiLCJhIjoiY2x6YjF1cWNyMGJlMjJyb29hZ240Zmk4ayJ9.58Mg37vr5SeKrBWZtAQ2xQ'
            }
          });
          
          setSuggestions(response.data.features.map(feature => feature.place_name));
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };

      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };


  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };









  return (
    <>
      <Header />
      <div 
        className='footer-color full-width' 
        style={{ backgroundImage: 'url("./banner2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='flex'>
          <div className='ml-32 py-28 bottom-5'>
            <div className='text-center mr-20 py-2'>
              <h1 className='font-passion text-white text-3xl md:text-6xl'>Trust us to take</h1>
              <h1 className='font-passion md:text-6xl mr-4 text-white'>You there</h1>
            </div>
            <div className="h-12 flex-col items-center justify-between px-4 sm:px-8 lg:px-32">
              <p className="text-black ml-10 text-sm">Hop in, Let's Go!</p>
              <form className="mr-32 flex flex-col md:gap-4 items-center">
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  className="p-1 border ml-14 w-100 text-black border-navbar-color rounded"
                  placeholder="Enter Location"
                />
                {suggestions && suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
                <input
                  type="text"
                  className="p-1 ml-14 w-100 border border-blue-950 rounded"
                  placeholder="Enter Destination"
                />
                <button
                  type="submit"
                  className="p-1 font-robot-bold mr-36 border-0 text-white navbar-color rounded px-4"
                >
                  Start
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="w-full h-full flex items-center py-4 ml-10 justify-center">
              <img
                src="/banner.png"
                alt="Banner"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20'>
        <Footer className='' />
      </div>
    </>
  );
}


export default HomeScreen
