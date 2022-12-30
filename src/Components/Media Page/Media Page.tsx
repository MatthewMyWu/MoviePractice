import React from 'react';
import {Link} from "react-router-dom";

function MediaPage() {
  return (
    <div>
      <h1>This should be the media page</h1>
      <Link to="/Search">Go to Search Page</Link>
      <br></br>
      <Link to="/">Go to Landing Page</Link>
    </div>
  );
}

export default MediaPage;
