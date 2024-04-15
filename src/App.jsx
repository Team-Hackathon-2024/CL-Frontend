import React from 'react';
import Home from './pages/Home';
import NoticePage from './pages/NoticePage';
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";



function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  );
}


export default App;
