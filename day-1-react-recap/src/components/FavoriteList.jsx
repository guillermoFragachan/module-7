import React, { useState } from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/Col"
import { useParams } from "react-router";
import { connect } from 'react-redux'
import { addToFavorite } from "../actions";

const mapStateToProps = (state) => ({
  favorites: state.favorites.content

})

const mapDispatchToProps = (dispatch) => ({
 
})



function FavoriteList({favorites}){

 


    return(
        <>
        { favorites.length > 0 &&
        favorites.map((e)=>{
          // console.log(e.e.company_name)
           return <p>{e.e.company_name}</p>
            

          
        })
          
        }
        
        {
          favorites.length > 0 &&
          <p>{favorites[favorites.length-1].e.company_name}</p>
          // console.log(favorites[0].e.company_name)

        }
         
       
        </>
    )

}



export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)