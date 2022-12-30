import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import LandingPage from './Landing Page/Landing Page';
import MediaPage from './Media Page/Media Page';
import SearchPage from './Search Page/Search Page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/media" element={<MediaPage></MediaPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
