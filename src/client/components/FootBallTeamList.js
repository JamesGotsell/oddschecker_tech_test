import React from 'react';
import FootBallTeamItem from './FootBallTeamItem'

export class FootBallTeamList extends React.Component  {
  render() {
    return (
        <div>
          <FootBallTeamItem teams={this.props.teams.clubs} />
          {console.log(this.props.teams.clubs[0]) }
        </div>
    ) 
  };
}

export default FootBallTeamList;