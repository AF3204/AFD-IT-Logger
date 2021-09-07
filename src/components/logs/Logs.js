import React, {useState, useEffect} from 'react'

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

    // Copied from the Brad git folder
    return (
        <ul className='collection with-header'>
        <li className='collection-header'>
            <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
            <p className='center'>No logs to show...</p>
        ) : (
            logs.map(log => <li key={log.id}>{log.message}</li>)
        )}
        </ul>
    )
}

export default Logs