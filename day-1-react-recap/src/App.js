import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import JobDetail from "./components/JobDetails";
import { BrowserRouter, Routes, Route, useParams  } from 'react-router-dom'




function App() {
  const [query, setQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState({ name: "title" });

  const params = useParams()

  const getQuery = (query) => setQuery(query);
  const getSelectedJob = (selectedJob) => setSelectedJob(selectedJob);

  useEffect(() => {
  }, [query, selectedJob]);

  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <Row>

              <Col xs={12}>
              

                <SearchBar getQuery={getQuery} />
                
              </Col>
            </Row>

            <Routes>
          <Route path='/:company' element={<JobList getSelectedJob={getSelectedJob} query={`?company=${params}`} />} />
          <Route path='/' element={  <JobList getSelectedJob={getSelectedJob} query={`?search=${query}`} />} />


          
        </Routes>

          </Col>
          <Col xs={6}>

            <JobDetail job={selectedJob} />

            
          </Col>
        </Row>
      </Container>

  
      </BrowserRouter>
  );
}

export default App;
