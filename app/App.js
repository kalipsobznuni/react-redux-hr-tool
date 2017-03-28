import React from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from './Components/LoginSignup'
import './style.sass';

class App extends React.PureComponent {

  render() {
    return(
      <div>
        <LoginSignup />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
