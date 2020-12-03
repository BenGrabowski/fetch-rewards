import React, { Component } from 'react';

class App extends Component {
  state = {
      list: undefined
  };

  componentDidMount() {
      fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json',
        {
            method: 'GET',
            // mode: 'no-cors'
        }
      )
      .then(res => res.json())
      .then(data => {
          this.setState({ list: data});
      })
      .catch(error => console.log(error));
  }
  
  render() {
    return (
        <main className='App'>
          <h1>Hello World</h1>
        </main>
      );    
  }
}

export default App;