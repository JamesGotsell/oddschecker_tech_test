
import React from 'react';


export class FootBallTeamItem extends React.Component  {
 
  render() {
    let image = {width: 100, height:100}

  {/* need to  add a click handler - passes information to editiableFootball component and scroll too */}
    var footyTeams = this.props.teams;
    return <div className="football-teams">
      {footyTeams.map((team, i) => {
            return (
                <div className="teams">
                  <img src={team.crest} style={image } />
                  <p>{team.name}</p>
                </div>
              )
        })}  
        </div>
    
  };
}

export default FootBallTeamItem;






