import React from 'react';
import TestPage from './TestPage';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import TestPage2 from './TestPage2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage></TestPage>}></Route>
          <Route path="/TestPage2" element={<TestPage2></TestPage2>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
