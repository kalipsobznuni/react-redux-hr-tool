import React from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from './Components/LoginSignup';
import Frontpage from './Components/Frontpage';
import './style.sass';

class App extends React.PureComponent {

  render() {
    return(
      <div>
        <Frontpage />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
