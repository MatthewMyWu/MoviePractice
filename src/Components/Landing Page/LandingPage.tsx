import React from 'react';
import {Link} from "react-router-dom";
import { Statics } from '../App';

function LandingPage() {
  return (
    <div>
      <h1>This should be the landing page</h1>
      <Link to={Statics.SEARCH_PATH}>Go to Search Page</Link>
      <br></br>
      <Link to={Statics.MEDIA_PATH}>Go to Media Page</Link>
    </div>
  );
}

export default LandingPage;
