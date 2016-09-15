import React from 'react';
import FootBallTeamItem from './FootBallTeamItem'

export class FootBallTeamList extends React.Component  {
  render() {
    return (
        <div>
          <FootBallTeamItem teams={this.props.teams.clubs} />
          {/*console.log(this.props.teams.clubs[0])
          <FootBallTeamItem teams={teams} key={i} /> */ }
        </div>
    ) 
  };
}

export default FootBallTeamList;