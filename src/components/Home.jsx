import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notes from './Notes';

const Home = (props) => {
  const { showAlert } = props;
  let navigate = useNavigate();

  useEffect(() => {
    // Agar local storage me token nahi hai toh login page par bhej dein
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;