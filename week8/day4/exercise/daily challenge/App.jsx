import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    message: '',
    postMessage: '',
    responseMessage: ''
  };

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3000/api/hello');
      this.setState({ message: response.data.message });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const postMessage = this.state.postMessage;

    try {
      const response = await axios.post('http://localhost:3000/api/world', { post: postMessage });
      this.setState({ responseMessage: response.data });
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  handleChange = (event) => {
    this.setState({ postMessage: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          
            <h2>Post to Server:</h2>
            <input
              type="text"
              value={this.state.postMessage}
              onChange={this.handleChange}
            />
          
          <button type="submit">Submit</button>
        </form>

        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;
