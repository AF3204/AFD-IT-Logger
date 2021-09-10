/**
 * This is where we have the action
 * in this case pull all of the logs
 */

import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types.js";

// We can return a function instead of a response by using thunk
// We need to research and understand this better
/**
 * Redux Thunk allows to return a function instead of just the values
 */
// 1. This is the version that shows how Thunk returns a function
// export const getLogs = () => {
//     // Allows to dispatch response and payload
//     return async (dispatch) => {
//         // Set loading to true and fetch data
//         setLoading();
//         const res = await fetch('http://localhost:5001/logs', {
//                             method: "GET",
//                             credentials: "same-origin"
//                         })
//         const data = await res.json()

//         dispatch({
//             type: GET_LOGS,
//             payload:data
//         })
//     }
// }

// 2. Since this will return as a function, we can refactor a few things
//  We don't have to embed
export const getLogs = () => async (dispatch) => {

    try {
      // Set loading to true and fetch data
        setLoading();
        const res = await fetch('http://localhost:5001/logs', {
                            method: "GET",
                            credentials: "same-origin"
                        })
        const data = await res.json()

        dispatch({
            type: GET_LOGS,
            payload:data
        })  
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload:err.response.data
        })  
    }
    
}

// Getting the loading status form withing
// Set loading to true
export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}