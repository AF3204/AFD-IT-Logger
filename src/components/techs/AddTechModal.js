import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const ADdTechModal = () => {
    
    // The model contains message, tech name and attention 
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit=()=>{
        if(firstName ==='' || lastName ===''){
            M.toast({
                html:`Enter tech's first and last name`,
                className:'danger'
            })
        } else {
            console.log(firstName, lastName);
        }
    }

    return (
        <div id='tech-add-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Enter New Technician name</h4>
            <div className='row'>
                {/* For the Onchange, we just target just the specific field */}
                <div className='input-field'>
                    <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        />
                    <label htmlFor='firstName' className='active'>
                        First Name
                    </label>
                </div>
            </div>
            <div className='row'>
                {/* For the Onchange, we just target just the specific field */}
                <div className='input-field'>
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        />
                    <label htmlFor='lastName' className='active'>
                        First Name
                    </label>
                </div>
            </div>
        </div>
        <div className='modal-footer'>
            <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light btn'
            >
            Enter
            </a>
        </div>
        </div>
    )
}

const modalStyle ={
    width:'75%',
    height: '75%'
}

export default ADdTechModal