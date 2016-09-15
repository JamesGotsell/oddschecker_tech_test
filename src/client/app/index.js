import React from 'react';
import { render } from 'react-dom';

import FootBallTeamList from '../components/FootBallTeamList'
import EditiableFootballTeam from '../components/EditiableFootballTeam'

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
          <h1>{this.state.name}</h1>
          <EditiableFootballTeam />
          <p>basic app component</p>
          <FootBallTeamList teams={this.state} />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));