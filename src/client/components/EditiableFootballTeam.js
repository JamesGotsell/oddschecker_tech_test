import React from 'react';


export class EditiableFootBallTeam extends React.Component  {
  constructor(props) {
            super(props);
            console.log(this.props);
  } 
  
  render() {

    
    return <div id="editiable-football-teams">
      <p>
        For communication between two components that don't have a parent-child relationship, you can set up your own global event system. Subscribe to events in componentDidMount(), unsubscribe in componentWillUnmount(), and call setState() when you receive an event. Flux pattern is one of the possible ways to arrange this.
      </p>

        <div className="EditableTeams">
          <img src={this.props}/>
          <form>
              <label >Position</label>
              <input type="text" name="position" placeholder={this.props} />
              <label >Next fixture</label>
              <input type="text" name="next_fixture" placeholder={this.props} />
              <label >Last 5 fixtures</label>
              <input type="text" name="last_5_fixtures" placeholder={this.props} />

          </form>
        </div>

    </div>
    
  };
}

export default EditiableFootBallTeam;