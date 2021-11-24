import React, { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/Col"
import { useParams } from "react-router";

import { connect } from 'react-redux'
import { addToFavorite } from "../actions";

const mapStateToProps = (state) => ({
  favorites: state.favorites
  // this is a dummy mapStateToProps, we're writing it just to be able to declare mapDispatchToProps
  // I'm not returning any key here because my component doesn't need to read anything from the state
})
// both these two are ALWAYS functions returning a single object
const mapDispatchToProps = (dispatch) => ({
  addFavs: function (jobToAdd) {
    dispatch(addToFavorite(jobToAdd))
  }
})

function  JobList  ({favorites, addFavs}, props) {


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
        //  onClick={()=>{
        //    props.getSelectedJob({e})
         
            
        // }} 

        onClick={()=>{
            addFavs({e})
          }}
         
         >
                    {e.title}

                
                    
             </Col>
         ))
     }
     </>
 )

}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);;