import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Lindsay
        </h1>
        <p>
          is a cute chick!
        </p>
      </header>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
