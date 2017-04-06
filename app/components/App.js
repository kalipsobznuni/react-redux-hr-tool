import React from 'react';
import ReactDOM from 'react-dom';
import NewCandidateForm from './NewCandidateForm';
import CandidateInterviewHomepage from './CandidateInterviewHomepage';
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
