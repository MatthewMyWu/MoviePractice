import React from 'react';
import {Link} from "react-router-dom";

function SearchPage() {
  return (
    <div>
      <h1>This should be the search page</h1>
      <Link to="/MoviePractice">Go to Landing Page</Link>
      <br></br>
      <Link to="/MoviePractice/Media">Go to Media Page</Link>
    </div>
  );
}

export default SearchPage;
