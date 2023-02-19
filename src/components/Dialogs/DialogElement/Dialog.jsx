import { NavLink } from 'react-router-dom';
import p from './../Dialogs.module.css'

const Dialog = (props) => {
    let link = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={link} className={status => status.isActive ? p.active : p.dialog}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;