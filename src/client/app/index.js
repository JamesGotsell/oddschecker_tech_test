import React from 'react';
import { render } from 'react-dom';

import FootBallTeamList from '../components/FootBallTeamList'


import styles from '../styles/main.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = require('../football-teams')
    //console.log(this.state)
    //console.log(this.state.props)
    
  }

  render() {
    return (
      <div className='wrapper'>
          <h2>{this.state.name}</h2>
          <p>basic app component</p>
          <FootBallTeamList teams={this.state}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));