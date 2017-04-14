import React from 'react';
import ReactDOM from 'react-dom';
import NewCandidateForm from './NewCandidateForm';
import CandidateInterviewHomepage from './CandidateInterviewHomepage';
import LoginSignup from './LoginSignup';
import Candidates from './Candidate';
import CustomQuestions from './CustomQuestions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../style/index.sass';

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
