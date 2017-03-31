import React from 'react';
import {connect} from 'react-redux';

class Candidates extends React.Component {
  render() {
    const renderCandidates = this.props.candidates.map((currCandidate, counter) => {
      return (
        <Candidate key={counter} info={currCandidate} />
      )
    })
    return (
      <div className="all-candidates">
        {renderCandidates}
      </div>
    )
  }
}

class Candidate extends React.Component {
  render() {
    const {info} = this.props;
    return (
      <div className="candidate">
        <div className="name">{info.name}</div>
        <div className="profession">{info.profession}</div>
        <div className="status">{info.status}</div>
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

export default connect(mapStateToProps)(Candidates);
