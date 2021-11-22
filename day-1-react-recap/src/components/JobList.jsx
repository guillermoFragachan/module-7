import React, { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/Col"
import { useParams } from "react-router";



function  JobList  (props) {


const [jobs, setJobs] = useState([])

const params = useParams()

const fetchJobs = async (q)  => { 
    const url = `https://strive-jobs-api.herokuapp.com/jobs?search=${q||"frontend"}&limit=10${params.company?`&company=${params.company}`:""}`
    const response = await fetch(url, {
        headers:{
            "Content-Type": "application/json"
        }
    })
    if(response.ok){
        const data = await response.json()
       

        setJobs(data.data)
        console.log(jobs)


    }

}

useEffect(() => {
 

  fetchJobs(props.query)


 },[props.query,params])


 return (
     <>

     { jobs.length > 0 &&
         jobs.map((e)=>( 
         
         <Col 
         onClick={()=>{
           props.getSelectedJob({e})
            
        }} 
         
         >
                    {e.title}
                    
             </Col>
         ))
     }
     </>
 )

}

export default JobList