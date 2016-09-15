{/*import React from 'react';


export class FootBallTeamItem extends React.Component  {

  render() {
    let image = {width: 100, height:100}
    
    return <div className="football-teams">
      {console.log(this.props.teams)}
    {/* problems with this - i need to work on the map  
      {this.props.teams.map((props, index) => {
            return (
                <div>
                  <img src={this.props.teams[0].crest} style={image } />
                  <p>{this.props.teams[0].name}</p>
                </div>
              )
        })}  
        </div>
    
  };
}

export default FootBallTeamItem;

*/}

import React from 'react';


export class FootBallTeamItem extends React.Component  {

  render() {
    let image = {width: 100, height:100}
    var footyTeams = this.props.teams;
    return <div className="football-teams">
      {footyTeams.map((team, i) => {
            return (
                <div>
                  <img src={team.crest} style={image } />
                  <p>{team.name}</p>
                </div>
              )
        })}  
        </div>
    
  };
}

export default FootBallTeamItem;






