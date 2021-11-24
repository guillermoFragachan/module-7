import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import JobDetail from "./components/JobDetails";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import JobLayout from "./layouts/JobLayout";




function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <JobLayout>
              <JobList
              
              />
            </JobLayout>
          }
        />
         <Route
          path="/:company"
          element={
            <JobLayout>
              <JobList
              />
            </JobLayout>
          }
        />
      </Routes>

    
    </BrowserRouter>
  );
}

export default  App
