import React from 'react';
import { Link } from 'react-router-dom';

function TestPage2() {
  return (
    <div className="Test-page-2">
      <h1>Test Page 2</h1>
      <Link to="/">Go to Test Page 1</Link>
    </div>
  );
}

export default TestPage2;
