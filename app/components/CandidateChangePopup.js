import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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

  changeProfession = (e, i, profession) => {
    this.setState({profession});
  }

  changeStatus = (e, i, status) => {
    this.setState({status});
  }

  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const professions = ["Developer", "Engineer", "Designer"];
    const statuses = ["Accepted", "Rejected", "Shortlisted"];
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
        onTouchTap={
          () => {
            const changedCandidate = {
              id: candidate.id,
              name: this.state.name,
              profession: this.state.profession,
              status: this.state.status
            };
            saveChangedCandidate(changedCandidate);
            closeDialogueBox();
        }
      }
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
            onChange={this.changeName}
          />
          <DropDownMenu
            value={this.state.profession}
            onChange={this.changeProfession}
          >
            {
              professions.map((profession, index) =>
                <MenuItem
                  key={index}
                  value={profession}
                  primaryText={profession}
                />
              )
            }
          </DropDownMenu>
          <DropDownMenu
            value={this.state.status}
            onChange={this.changeStatus}
          >
            {
              statuses.map((status, index) =>
                <MenuItem
                  key={index}
                  value={status}
                  primaryText={status}
                />
              )
            }
          </DropDownMenu>
        </Dialog>
      </div>
    );
  }
}
