import React from 'react';
import {
  HashRouter,
  HashRouter as Router, Route, Routes
} from "react-router-dom";
import LandingPage from './Landing Page/LandingPage';
import MediaPage from './Media Page/MediaPage';
import PageNotFound from './Page Not Found/PageNotFound';
import SearchPage from './Search Page/SearchPage';

export class Statics {
  public static readonly ROOT_PATH = "/";
  public static readonly SEARCH_PATH = Statics.ROOT_PATH + "Search/";
  public static readonly MEDIA_PATH = Statics.ROOT_PATH + "Media/";
}



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path={Statics.ROOT_PATH} element={<LandingPage></LandingPage>}></Route>
          <Route path={Statics.SEARCH_PATH} element={<SearchPage></SearchPage>}></Route>
          <Route path={Statics.MEDIA_PATH} element={<MediaPage></MediaPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
