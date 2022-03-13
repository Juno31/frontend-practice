//React
import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Landing from './pages/Landing'
import Svg from './pages/Svg'
import Animation from './pages/Animation'
import GlobalStyles from './globalStyles'

function App() {

  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/svg/*" element={<Svg />} />
        <Route path="/animation/*" element={<Animation />} />
      </Routes>
    </Fragment>
  );
}

export default App;
