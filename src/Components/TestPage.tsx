import React from 'react';
import {Link} from "react-router-dom";

function TestPage() {
  return (
    <div className="Test-page">
      <h1>Test Page</h1>
      <Link to="/TestPage2">Go to TestPage2</Link>
    </div>
  );
}

export default TestPage;
