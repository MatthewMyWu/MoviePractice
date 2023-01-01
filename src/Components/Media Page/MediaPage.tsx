import React from 'react';
import {Link} from "react-router-dom";
import { Statics } from '../App';

function MediaPage() {
  return (
    <div>
      <h1>This should be the media page</h1>
      <Link to={Statics.SEARCH_PATH}>Go to Search Page</Link>
      <br></br>
      <Link to={Statics.ROOT_PATH}>Go to Landing Page</Link>
    </div>
  );
}

export default MediaPage;
