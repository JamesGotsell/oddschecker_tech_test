import React from 'react';
import { render } from 'react-dom';

import FootBallTeamList from '../components/FootBallTeamList'
import EditiableFootballTeam from '../components/EditiableFootballTeam'

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
      <div>
          <h2>{this.state.name}</h2>
          <EditiableFootballTeam defaultTeam={this.state} />
          <p>basic app component</p>
          <FootBallTeamList teams={this.state} />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));