import React from 'react';

export default class LoginSignup extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }
  logIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
      console.log(error);
    });
  }
  render() {
    return(
      <div className="main">
        <div className="container">
          <div className="login-signup">
            <input value={this.state.email} onChange={e => this.setState({email: e.currentTarget.value})} placeholder="Email"></input>
            <input value={this.state.password} onChange={e => this.setState({password: e.currentTarget.value})} type="password" placeholder="Password"></input>
            <button onClick={this.logIn}>Log In</button>
            <button> Sign Up </button>
          </div>
        </div>
      </div>
    )
  }
}
