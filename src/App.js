import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import ShowList from './components/ShowList/ShowList';
import ShowDetails from './components/ShowDetails/ShowDetails';

const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(API_URL);
        setShows(response.data.map((result) => result.show));
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">TV Shows</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/show/:id" element={<ShowDetails shows={shows} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;