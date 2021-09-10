// THe same as the useHooks and Reducers

// Bringing in the types
import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR } from "../actions/types.js";
/**
 * Still uses the state and action
 * Also, need to initialise the initialState
 *  */ 

const initialState={
    logs:null,
    current:null,
    loading: false,
    error:null
}

// Set the state to intialState
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return{
                ...state,
                logs:action.payload,
                loading: false
            }
        case ADD_LOG:
            // State is immutable, so we can't just PUSH new variables
            // Action.payload is the newly added log
            return{
                ...state,
                logs:[...state.logs, action.payload],
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            console.error(action.payload)
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}