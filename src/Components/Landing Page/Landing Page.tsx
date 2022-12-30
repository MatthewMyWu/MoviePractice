import React from 'react';
import {Link} from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>This should be the landing page</h1>
      <Link to="/MoviePractice/Search">Go to Search Page</Link>
      <br></br>
      <Link to="/MoviePractice/Media">Go to Media Page</Link>
    </div>
  );
}

export default LandingPage;
