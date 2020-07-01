import React from 'react';
import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Beginning my new react app</p>
        <a
          className='App-link'
          href='https://haasecancode.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn more about Mandi
        </a>
      </header>
    </div>
  );
}

export default App;
