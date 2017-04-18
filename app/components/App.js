import React from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from './LoginSignup';
import Candidates from './Candidates';
import CustomQuestions from './CustomQuestions';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.PureComponent {
  constructor(){
    super();
    injectTapEventPlugin();
  }

  render() {

    return(
      <div>
        <CustomQuestions />
      </div>
    )
  }
}

export default App;
