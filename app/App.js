import React from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from './Components/LoginSignup';
import List from './Components/List';
import Candidates from './candidates';
import './style.sass';

class App extends React.PureComponent {

  render() {
    return(
      <div>
        <List listName="name" listElements={Candidates} />
        <List listName="profession" listElements={Candidates} />
        <List listName="status" listElements={Candidates} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
