import { NavLink } from 'react-router-dom';
import p from './NavBar.module.css';
import Friends from './Friends/Friends';


const NavBar = () => {
    return (
        <nav className={p.nav}>
            <div className={p.item}>
                <NavLink to='/profile' className={NavData => NavData.isActive ? p.active : p.item}>Profile</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/dialogs' className={NavData => NavData.isActive ? p.active : p.item}>Messages</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/news' className={NavData => NavData.isActive ? p.active : p.item}>News</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/music' className={NavData => NavData.isActive ? p.active : p.item}>Music</NavLink>
            </div>
            <div className={p.item}>
                <NavLink to='/settings' className={NavData => NavData.isActive ? p.active : p.item}>Settings</NavLink>
            </div>
            <Friends />
        </nav>
    )
};

export default NavBar;