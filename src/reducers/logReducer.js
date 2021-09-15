// THe same as the useHooks and Reducers

// Bringing in the types
import { 
    GET_LOGS,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SET_LOADING,
    SET_CURRENT,
    CLEAR_CURRENT,
    LOGS_ERROR, 
    SEARCH_LOGS,
    CLEAR_LOGS} from "../actions/types.js";
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
        case DELETE_LOG:
            return{
                ...state,
                loading:false,
                logs: state.logs.filter(log => log.id !== action.payload)
            }
        case UPDATE_LOG:
            return{
                ...state,
                logs: state.logs.map(
                    log=> log.id === action.payload.id
                    ? action.payload
                    : log
                )
            }
        case SEARCH_LOGS:
            return{
                ...state,
                logs: action.payload
            }
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
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