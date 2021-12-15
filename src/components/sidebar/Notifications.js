import React from 'react'
import { notifications } from '../Data'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Notifications = (props) => {
    const [notif, setNotif] = useState(notifications);
    return (
        <div className="notif">
            <h3>{notif.notif1}</h3>
            <h3>{notif.notif2}</h3>
            <h3>{notif.notif3}</h3>
            <span>
            <Link to='/'>go back</Link>
            </span>
        </div>
    )
}

export default Notifications
