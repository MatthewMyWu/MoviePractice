import React from 'react';
import {Link} from "react-router-dom";
import TrendingList from './TrendingList';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <h1>This should be the landing page</h1>
      <Link to="/MoviePractice/Search">Go to Search Page</Link>
      <br></br>
      <Link to="/MoviePractice/Media">Go to Media Page</Link>
      <TrendingList mediaType="movie"></TrendingList>
      <TrendingList mediaType="tv"></TrendingList>
    </div>
  );
}

export default LandingPage;
