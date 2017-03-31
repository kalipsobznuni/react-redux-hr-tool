import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import LoginSignup from './LoginSignup';
import Candidate from './Candidate';
import '../style.sass';

class App extends React.PureComponent {

  render() {
    const renderCandidates = this.props.candidates.map((currCandidate, counter) => {
      return (
        <Candidate key={counter} info={currCandidate} />
      )
    })
    return(
      <div>
        {renderCandidates}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return (
    {
      candidates: state.candidates
    }
  )
}

export default connect(mapStateToProps)(App);
