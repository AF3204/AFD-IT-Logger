import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addLog} from '../../actions/logAction'

const AddLogModel = ({addLog}) => {
    
    // The model contains message, tech name and attention 
    const [message, setMessage] = useState('')
    const [tech, setTech] = useState('')
    const [attention, setAttention] = useState(false)

    const onSubmit=()=>{
        if(message === '' || tech ==='' ){
            M.toast({
                html:'Enter a message along with the technician',
                className:'danger'
            })
        } else {
            // console.log(message, tech, attention);
            // Preparing the content
            const newLog={
                message,
                attention,
                tech,
                date: new Date()
            }

            // Sending to addLog
            addLog(newLog)

            M.toast({
                html:`New Log reported by ${tech}`
            })


            setMessage('')
            setTech('')
            setAttention(false)
        }
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Enter System Log</h4>
            <div className='row'>
                {/* For the Onchange, we just target just the specific field */}
            <div className='input-field'>
                <input
                    type='text'
                    name='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    />
                <label htmlFor='message' className='active'>
                    Log Message
                </label>
            </div>
            </div>

            <div className='row'>
                <div className='input-field'>
                 <select
                    name='tech'
                    value={tech}
                    className='browser-default'
                    onChange={e => setTech(e.target.value)}
                    >
                    <option value='' disabled>
                        Select Technician
                    </option>
                    <option value='John Doe'>John Doe</option>
                    <option value='Sam Smith'>Sam Smith</option>
                    <option value='Sara Wilson'>Sara Wilson</option>
                 </select>
                </div>
            </div>

            <div className='row'>
            <div className='input-field'>
                <p>
                <label>
                    <input
                        type='checkbox'
                        className='filled-in'
                        checked={attention}
                        value={attention}
                        onChange={e => setAttention(!attention)}
                    />
                    <span>Needs Attention</span>
                </label>
                </p>
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

AddLogModel.propTypes={
    addLog:PropTypes.func.isRequired,
}

// We use null cause it should not have any value by default
export default connect(null,{addLog})(AddLogModel)