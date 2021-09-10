import React, {useState, useEffect} from 'react'
import TechItem from './TechItem'

const TechListModal = () => {

    // Null the array for logs
    const [techs, settechs] = useState([])
    // Loading is false by default
    const [loading, setLoading] = useState(false)

    // Decoupling the gettechs and saving it's content
    useEffect(()=>{
        gettechs()
    },[])

    // Using FetchAPI for techs
    const gettechs = async() =>{
        // Loading -> true; Getting the data
        setLoading(true)
        const res = await fetch('http://localhost:5001/techs', {
                            method: "GET",
                            credentials: "same-origin"
                        })
      
        const data = await res.json();
        // Loading -> false; Parsing the data
        settechs(data)
        setLoading(false)
    }

    // Copied from the Brad git folder
    return ( 
        <div id='tech-list-modal' className='modal'>
            <ul className='collection with-header'>
                <li className='collection-header'>
                    <h4 className='center'>Technician</h4>
                </li>
                {!loading && techs!==0
                    ?(techs.map(
                        tech=>(<TechItem key={tech.id} tech={tech}/>)
                    ))
                    : (<p className='center'>No Technicians</p>) 
                }
            </ul>
        </div>
    )
}

export default TechListModal