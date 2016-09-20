
import React from 'react';
import EditiableFootballTeam from './EditiableFootballTeam'

export class FootBallTeamItem extends React.Component  {
  constructor(props) {
          super(props);
          console.log(this.props);
    }
  
  handleClick (i){
    // i need to make sure the correct props are getting passed into the 
    // editableFootballTeam - started - i can understand why the 
    console.log('You clicked: ' + this.props);
   // console.log(this.props[0])
   const selectedTeam = Object.assign({} , this)
    console.log(selectedTeam)
    //this.props = selectedTeam
    //console.log(this.props + " " + "selectedTeam")
    var el = document.querySelector('#editiable-football-teams')
    el.scrollIntoView()
  }


  render() {
    let image = {width: 100, height:100}
    var footyTeams = this.props.teams;
    return (
    <div>
      <EditiableFootballTeam  selectedTeam={this.selectedTeam}/>
          <div className="football-teams">
            {footyTeams.map((team, i) => {
                  return (
                      <div className="teams" onClick={this.handleClick.bind(team, i)} key={i}>
                        <img src={team.crest} style={image} />
                        <p>{team.name}</p>
                      </div>
                    )
              })}  
      
              </div>
    </div>)  
  };
}

export default FootBallTeamItem;