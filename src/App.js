import React from 'react';
import UrlShortener from './URLshortener';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
      </header>
      <main>
        <UrlShortener />
      </main>
    </div>
  );
}

export default App;