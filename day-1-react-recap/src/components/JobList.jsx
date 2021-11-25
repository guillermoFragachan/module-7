import React, { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/Col"
import { useParams } from "react-router";

import { connect } from 'react-redux'
import { addToFavorite, getJobsAction } from "../actions";
import FavoriteList from "./FavoriteList";

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  jobs: state.jobs.positions
  // this is a dummy mapStateToProps, we're writing it just to be able to declare mapDispatchToProps
  // I'm not returning any key here because my component doesn't need to read anything from the state
})
// both these two are ALWAYS functions returning a single object
const mapDispatchToProps = (dispatch) => ({
  addFavs: function (jobToAdd) {
    dispatch(addToFavorite(jobToAdd))
  },
  getJobs:()=>{
    dispatch(getJobsAction())
  }
})

function  JobList  ({jobs, getJobs, addFavs, getSelectedJob, query}) {


// const [jobs, setJobs] = useState([])

const params = useParams()

// const fetchJobs = async (q)  => { 
//     const url = `https://strive-jobs-api.herokuapp.com/jobs?search=${q||"frontend"}&limit=10${params.company?`&company=${params.company}`:""}`
//     const response = await fetch(url, {
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//     if(response.ok){
//         const data = await response.json()
       

//         setJobs(data.data)
//         // console.log(jobs)


//     }

// }

useEffect(() => {
 

  getJobs()


 },[query,params])


 return (
     <>

     { jobs.length > 0 &&
         jobs.map((e)=>( 
         
         <Col 
         onClick={()=>{
           getSelectedJob({e})
         
            
        }} 

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