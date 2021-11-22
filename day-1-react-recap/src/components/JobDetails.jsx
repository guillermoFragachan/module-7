import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate,useParams, Routes, Route, Link } from 'react-router-dom'


function JobDetail(props) {
  const params = useParams()
  const navigate = useNavigate()

  const job = props.job.e

  useEffect(() => {

    console.log(navigate, "params")

    
     },[props])
  return (
    <>

     { job &&
      <Card >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Text>
          {/* <Link to={job.company_name}> */}
          <a onClick={()=>{
            navigate(job.company_name)
          }}>Company name: {job.company_name}</a>
          {/* </Link> */}
          <hr/>
          {job.description}
        </Card.Text>
        <Button variant="primary">Apply</Button>
      </Card.Body>
    </Card>
       
     }
    </>
  );
}

export default JobDetail;
