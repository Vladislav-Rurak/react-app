// Single Page Aplication (SPA)`

import { useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import AboutPage from './pages/About Page';
import HomePage from './pages/Home Page';
import Layout from './pages/Layout';
import NotFound from './pages/Not Found';

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
