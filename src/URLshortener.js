import React, { useState } from 'react';
import axios from 'axios';
// import './UrlShortener.css';

function UrlShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const response = await axios.post('http://localhost:8080/shortener', { url: longUrl }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // Construct the full shortened URL
      const fullShortUrl = `http://localhost:8080/${response.data}`;
      setShortUrl(fullShortUrl);
    } catch (err) {
      setError(err.response?.data || 'An error occurred while shortening the URL. Please try again.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="url-shortener">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter a long URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {error && <p className="error">{error}</p>}
      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default UrlShortener;