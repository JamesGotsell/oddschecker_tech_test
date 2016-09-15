import React from 'react';


export class FootBallTeamItem extends React.Component  {

  render() {
    return <div className="football-teams">
      {console.log(this.props.teams)}
    {/* problems */}
      {this.props.teams.map((props, index) => {
            return (
                <div>
                  <img src={this.props.teams[0].crest}/>
                  <p>{this.props.teams[0].name}</p>
                </div>
              )
        })}  
        </div>
    
  };
}

export default FootBallTeamItem;











