import { NavLink } from 'react-router-dom';
import defineNavLinkStyle from '../function';

const Header = () => (
  <header>
    <h1>Main Page</h1>
    <nav>
      <NavLink style={defineNavLinkStyle} to='/'>
        Home
      </NavLink>
      <br />
      <NavLink style={defineNavLinkStyle} to='/about'>
        About
      </NavLink>
      <br />
    </nav>
  </header>
);

export default Header;
