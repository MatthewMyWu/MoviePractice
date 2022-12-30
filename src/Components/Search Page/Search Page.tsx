import React from 'react';
import {Link} from "react-router-dom";

function SearchPage() {
  return (
    <div>
      <h1>This should be the search page</h1>
      <Link to="/">Go to Landing Page</Link>
      <br></br>
      <Link to="/Media">Go to Media Page</Link>
    </div>
  );
}

export default SearchPage;
