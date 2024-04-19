import React from 'react';
import Home from './pages/Home';
import NoticePage from './pages/NoticePage';
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import TablePage from './pages/TablePage';
import AttendancePage from './pages/AttendancePage';



function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  );
}


export default App;
