import React from 'react';
import {Link} from "react-router-dom";
import { Statics } from '../App';

function SearchPage() {
  return (
    <div>
      <h1>This should be the search page</h1>
      <Link to={Statics.ROOT_PATH}>Go to Landing Page</Link>
      <br></br>
      <Link to={Statics.MEDIA_PATH}>Go to Media Page</Link>
    </div>
  );
}

export default SearchPage;
