import React from 'react';
import {connect} from 'react-redux';

class List extends React.Component {
  render() {
    const {listName, listElements} = this.props;
    const renderElements = listElements.map((element, counter) => {
      return (
        <li key={counter}>
          {element[listName]}
        </li>
      )
    })
    return (
      <div className="list">
        <h1>{listName}</h1>
        {renderElements}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return (
    {
      listElements: state.members
    }
  )
}

export default connect(mapStateToProps)(List);
