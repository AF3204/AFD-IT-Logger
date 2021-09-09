import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModel = () => {
    
    // The model contains message, tech name and attention 
    const [msg, setMsg] = useState('')
    const [tech, setTech] = useState('')
    const [attn, setAttn] = useState(false)

    const onSubmit=()=>{
        if(msg === '' || tech ==='' ){
            M.toast({
                html:'Enter a message along with the technician',
                className:'danger'
            })
        }
        console.log(msg, tech, attn);
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
                    name='msg'
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    />
                <label htmlFor='msg' className='active'>
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
                        checked={attn}
                        value={attn}
                        onChange={e => setAttn(!attn)}
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

export default AddLogModel