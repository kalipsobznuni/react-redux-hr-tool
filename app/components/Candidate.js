import React from 'react';

class Candidate extends React.Component {
  render() {
    const {info} = this.props;
    return (
      <div className="list">
        <h1>{info.name}</h1>
        <li>{info.profession}</li>
        <li>{info.status}</li>
      </div>
    )
  }
}

export default Candidate;
