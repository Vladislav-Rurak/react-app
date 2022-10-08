import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

export default NotFound;
