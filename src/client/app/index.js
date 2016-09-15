import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div>
          <h1> stuff</h1>
          <p>basic app component</p>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));