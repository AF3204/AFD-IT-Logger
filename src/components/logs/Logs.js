import React, {useState, useEffect} from 'react'
import LogItem from './LogItem'
import Preloader  from '../layout/Preloader'

const Logs = () => {

    // Null the array for logs
    const [logs, setLogs] = useState([])
    // Loading is false by default
    const [loading, setLoading] = useState(false)

    // Decoupling the getLogs and saving it's content
    useEffect(()=>{
        getLogs()
    },[])

    // Using FetchAPI for logs
    const getLogs = async() =>{
        // Loading -> true; Getting the data
        setLoading(true)
        const res = await fetch('http://localhost:5001/logs', {
                            method: "GET",
                            credentials: "same-origin"
                        })
      
        const data = await res.json();
        // Loading -> false; Parsing the data
        setLogs(data)
        setLoading(false)
    }

    if(loading){
        return <Preloader/>
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

export default Logs