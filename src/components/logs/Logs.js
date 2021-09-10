import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader  from '../layout/Preloader'
// 20210911 - Bringing in PropTypes
import PropTypes from 'prop-types'
// Get logs coming from the Action
import { getLogs } from '../../actions/logAction'

/**
 * 2. mapStateToProps is pushed into this constant
 * we can destructure from the props
 * The props: log and getLogs
 * Even though it is an action, it is also considered as a prop
 * @returns 
 */

const Logs = ({log: {logs, loading}, getLogs}) => {

    // 20210911 - We can disable those that use useState
    // Null the array for logs
    // const [logs, setLogs] = useState([])
    // Loading is false by default
    // const [loading, setLoading] = useState(false)

    // Decoupling the getLogs and saving it's content
    useEffect(()=>{
        getLogs()
    },[])


    // 20210911 - Since we're using Redux and calling from the action
    // we can close this
    // Using FetchAPI for logs
    // const getLogs = async() =>{
    //     // Loading -> true; Getting the data
    //     setLoading(true)
    //     const res = await fetch('http://localhost:5001/logs', {
    //                         method: "GET",
    //                         credentials: "same-origin"
    //                     })
      
    //     const data = await res.json();
    //     // Loading -> false; Parsing the data
    //     setLogs(data)
    //     setLoading(false)
    // }
    if (loading || logs === null) {
        // return <Preloader />;
        return 'Need to check the logs';
    }

    // Copied from the Brad git folder
    return (
        <ul className='collection with-header'>
        <li className='collection-header'>
            <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
            <p className='center'>No logs to show...</p>
        ) : (
            logs.map(log => <LogItem log={log} key={log.id}/>)
        )}
        </ul>
    )
}

/**
 * 1. Connect is gotten from react-redux
 * Connects the react to the redux
 * The component must be in the connect parenthesis
 * Any state in this is received as a prop, which is pulled form Action
 * In this example: we pull from the logAction
 * log: the prop type
 * state.log: from the combined Reducers
 * mapStateToProps is pushed into the connect
 * We are mapping out app level state to a local component prop
 */

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
};
  
const mapStateToProps = state => ({
    log: state.log
});

export default connect(
    mapStateToProps,
    { getLogs }
)(Logs);