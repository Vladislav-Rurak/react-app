// Single Page Aplication (SPA)

import { useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

const HomePage = () => (
  <main>
    <h2>Home Page</h2>
  </main>
);

const AboutPage = () => (
  <main>
    <h2>About Page</h2>
  </main>
);

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });

  return (
    <div>
      <h2>The page not gound</h2>
      <Link to='/'>Home</Link>
    </div>
  );
};

const defineNavLinkStyle = ({ isActive }) => ({
  color: isActive ? 'red' : 'blue',
});

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

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
