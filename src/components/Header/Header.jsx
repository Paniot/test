import { NavLink } from 'react-router-dom';
import Logo from './../../img/logo.png';
import p from './Header.module.css'

const Header = (props) => {
  return (
    <header className= {p.header}>
      <img src={Logo} alt=''></img>
      <div className={p.loginBlock}>
        {props.props.isAuth 
        ? <NavLink to={'/profile/2'}>{props.props.login}</NavLink>
        : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>)
};

export default Header;