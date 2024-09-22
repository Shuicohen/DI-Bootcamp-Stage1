import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: 'bold' }}>This is a Header</h1>
        <p>This is a Paragraph</p>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">This is a Link</a>

        <h3>This is a Form:</h3>
        <form>
          <label>
            Enter your name:
            <input type="text" placeholder="Enter your name..." />
          </label>
          <button type="submit">Submit</button>
        </form>

        <h3>Here is an Image:</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" style={{ width: '300px', height: 'auto' }} />

        <h3>This is a List:</h3>
        <ul style={{ listStyleType: 'disc', display: 'inline-block', textAlign: 'left' }}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
