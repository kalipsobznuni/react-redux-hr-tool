import React from 'react';
import {connect} from 'react-redux';

class Candidates extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "",
      showDropDown: false
    }
  }
  render() {
    const renderCandidates = this.props.candidates.map((currCandidate, counter) => {
      return (
        <Candidate key={counter} info={currCandidate} />
      )
    });
    const dropDown = () => {
      return (
        <div className="dropdown">
          <button onClick={this.dropDown} className="dropbtn">Dropdown</button>
          <div id="myDropdown" className="dropdown-content">
          </div>
        </div>
      )
    }
    return (
      <div className="candidates-main">
        {dropDown()}
        <div className="all-candidates">
          <div className="candidate header">
            <div>Name</div>
            <div>Profession</div>
            <div>Status</div>
          </div>
          {renderCandidates}
        </div>
      </div>
    )
  }
}

function Candidate(props) {
    const {info} = props;
    return (
      <div className="candidate">
        <div className="name">{info.name}</div>
        <div className="profession">{info.profession}</div>
        <div className="status">{info.status}</div>
      </div>
    )
}

function mapStateToProps(state) {
  return (
    {
      candidates: state.candidates
    }
  )
}

export default connect(mapStateToProps)(Candidates);
