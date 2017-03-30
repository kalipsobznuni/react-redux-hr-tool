import React from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from './LoginSignup';
import List from './List';
import Candidates from '../candidates';
import '../style.sass';

export default class App extends React.PureComponent {

  render() {
    return(
      <div>
        <List listName="name" />
        <List listName="profession" />
        <List listName="status" />
      </div>
    )
  }
}
