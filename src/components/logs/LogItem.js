import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
// 20210910: Bringing in some stuff
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../actions/logAction'
import M from 'materialize-css/dist/js/materialize.min.js'

// 20210915: Added the Set Current
const LogItem = ({log,deleteLog,setCurrent}) => {

    const onDelete = () =>{
        deleteLog(log.id)
        M.toast({
            html:`Deleted Log #${log.id}`
        })
    }

    return (
        <li className="collection-item" key={log.id}>
            <div>
                {/* 20210915: Adding the set Current to pull the log entries */}
                <a
                    href='#edit-log-modal'
                    className={`modal-trigger ${
                        log.attention ? 'red-text' : 'blue-text'
                    }`}
                    onClick={() => setCurrent(log)}
                >
                {log.message}</a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span>
                    {' '}last updated by {' '}
                    <span className='black-text'>{log.tech}</span> on{' '}
                    <Moment format='DD-MM-YYYY, hh:mm a'>{log.date}</Moment>
                </span>
                <a href='#!' onClick={onDelete} className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div> 
        </li>
    )
}

// 20210911: adding delete log function from logAction
LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

// 20210901: Null to represent the null state
export default connect(null, 
    { deleteLog, setCurrent }
    )(LogItem)
