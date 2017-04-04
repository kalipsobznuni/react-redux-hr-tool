import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, blue500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();


class NewCandidateForm extends React.PureComponent {
    constructor(props){
      super(props);
      this.state = {
        value: " "
      };
    }

        handleSumbit = (e) => {
        alert('New Candidate: ' + this.state.value);
        event.preventDefault();
      }

      handleChange = (e) => {
        this.setState({value: e.target.value});
      }

  render() {

    const styles = {
      floatingLabelStyle: {
        color: orange500,
      },
      floatingLabelFocusStyle: {
        color: blue500,
      },
    };


      const TextFieldName = () => (
      <div>
          <TextField
          floatingLabelText="Full Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>
      );

      const TextFieldEmail = () => (
      <div>
          <TextField
          floatingLabelText="Email Address"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>
      );

      const TextFieldPhone = () => (
      <div>
          <TextField
          floatingLabelText="Phone"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>
      );
      const TextFieldAddress = () => (
      <div>
          <TextField
          floatingLabelText="Address"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
      </div>
      );

    const RaisedButtonExampleSimple = () => (
      <div>
        <RaisedButton
        label="Submit"
        primary={true}
        prop={true}
        />
      </div>
    );



    return(
      <div>
      <form onSubmit={this.handleSumbit}>
          <TextFieldName  />
          <TextFieldEmail />
          <TextFieldPhone />
          <TextFieldAddress />
          <RaisedButtonExampleSimple />
      </form>
      </div>
    )
  }
}

export default NewCandidateForm;
