import React from 'react';
import {Link} from "react-router-dom";
import { Statics } from '../App';

function PageNotFound() {
  return (
    <div>
      <h1>Page can not be found</h1>
      <Link to={Statics.ROOT_PATH}>Go to Home Page</Link>
    </div>
  );
}

export default PageNotFound;
