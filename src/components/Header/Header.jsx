import Logo from './../../img/logo.png';
import p from './Header.module.css'

const Header = () => {
  return (
    <header className= {p.header}>
      <img src={Logo} alt="hmm"></img>
    </header>)
};

export default Header;