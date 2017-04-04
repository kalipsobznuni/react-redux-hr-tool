import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class CandidateChangePopup extends React.PureComponent {
  constructor(props) {
    super(props);
    const {candidate} = props;
    this.state = {
      name: candidate.name,
      profession: candidate.profession,
      status: candidate.status
    }
  }

  changeValue = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  render() {
    const {closeDialogueBox, saveChangedCandidate, candidate} = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={closeDialogueBox}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={() => {saveChangedCandidate; closeDialogueBox}}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Change canidate info"
          actions={actions}
          modal={false}
          open={true}
          onRequestClose={closeDialogueBox}
        >
          <TextField
            name="name"
            fullWidth={true}
            floatingLabelText="Name"
            value={this.state.name}
            onChange={this.changeValue}
          />
          <TextField
            name="profession"
            fullWidth={true}
            floatingLabelText="Profession"
            value={this.state.profession}
            onChange={this.changeValue}
          />
          <TextField
            name="status"
            fullWidth={true}
            floatingLabelText="Status"
            value={this.state.status}
            onChange={this.changeValue}
          />
        </Dialog>
      </div>
    );
  }
}
