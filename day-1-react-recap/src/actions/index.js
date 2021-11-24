export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'



export const addToFavorite = (jobToAdd) => ({
  type: ADD_TO_FAVORITE,
  payload: jobToAdd, // this is going to be the book we intend to add to the FAVORITE
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
})

export const removeFromFavorite = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: indexToRemove,
})