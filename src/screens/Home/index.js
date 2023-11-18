import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Library from '../Library/index';
import Feed from '../Feed/index';
import Trending from '../Trending/index';
import Player from '../Player/index';
import Favourites from '../Favourites/index';
import Sidebar from '../../components/Sidebar';
import './Home.css';
export default function Home() {
  return (
    <Router>
      <div className='main-body'>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Library/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/player" element={<Player/>}/>
          <Route path="/favourites" element={<Favourites />}/>
        </Routes>
      </div>
    </Router>
  )
}
