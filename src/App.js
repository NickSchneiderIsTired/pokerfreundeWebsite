import React from 'react';
import './App.css';
import Routes from './Routes';
import TopBar from './components/TopBar';

function App() {
  return (<>
    <TopBar />
    <Routes childProps={{}}/>
  </>
  );
}

export default App;
