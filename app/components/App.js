import React from 'react';
import ReactDOM from 'react-dom';

import LoginSignup from './LoginSignup';
import Candidates from './Candidate';
import '../style/index.sass';

class App extends React.PureComponent {

  render() {

    return(
      <div>
        <Candidates />
      </div>
    )
  }
}

export default App;
