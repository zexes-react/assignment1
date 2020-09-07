import React, { Component } from 'react';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOuput'

class App extends Component {

    state = {
      username: 'supermax'
    }

    manipulationHandler = (event) =>{
        this.setState({username: event.target.value})
    }

  render() {
    return (
      <div>
          <UserInput changed={this.manipulationHandler} currentName={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
