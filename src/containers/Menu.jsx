import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="App-header">
        <div className='content'>
          <h1>Pokerfreunde 2018 e.V.</h1>
          <p>
            Pokern im Verein ohne Geldeinsätze
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={() => navigate("/register")}
              variant='contained'
            >
              Turnieranmeldung
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
