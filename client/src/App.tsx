import React, {useEffect, useState} from 'react';
import {CssBaseline} from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import {MessageList} from './components/MessageList';

function App() {
  const [items, setItems] = useState([{name: 'Loading', count: 0}]);
  const [err, setErr] = useState('');

  useEffect(() => {
    setInterval(() => {
      fetch('/docs')
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          console.log('Uh oh');
          throw response;
        })
        .then(data => {
          setItems(data.items);
        })
        .catch((err: Response) => {
          setItems([{name: 'An error occurred', count: 1}]);
          setErr(err.statusText);
          console.log(err.statusText);
        });
    }, 1000);
  }, []);

  return (
    <div className={'App'}>
      <CssBaseline />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to a very simple React app.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <MessageList items={items} />
      {err !== '' ? <div>An error occurred: {err}</div> : ''}
    </div>
  );
}

export default App;
