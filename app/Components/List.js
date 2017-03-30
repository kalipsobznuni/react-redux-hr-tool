import React from 'react';

export default class List extends React.Component {
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
