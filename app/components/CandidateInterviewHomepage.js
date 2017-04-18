import React from 'react';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {orange500, blue500} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField';
import Timer from 'react-timer';
import Dialog from 'material-ui/Dialog';

class CandidateInterviewHomepage extends React.PureComponent {
  componentDidMount(){
    document.getElementsByClassName('react-timer')[0].children[3].innerHTML="start";
  }

  render() {
    const OPTIONS = { prefix: 'seconds elapsed!', delay: 100};

    const TimerNow = () => {
      return (
        <div>
          <Timer options={OPTIONS} />
        </div>
      )
    };

    const Questions = () => {
      return (
        <div>
          {
            this.props.questions.map(question => {
              return (
                <TextField
                  key={question.id}
                  floatingLabelText={question.question}
                  fullWidth
                />
              )
            })
          }
        </div>
      )
    }

    const actions = [
      <FlatButton
        label="cancel"
        primary={true}
        onTouchTap={this.props.closeInterviewScreen}
      />,
      <FlatButton
        label="save"
        primary={true}
        onTouchTap={this.props.saveInterview}
      />
    ];

    const AdditionalComments = () => {
      return (
        <TextField
          hintText="Comments"
          floatingLabelText="Additional Comments"
          multiLine={true}
          rows={4}
        />
     )}
    return(
      <Dialog
        actions={actions}
        onRequestClose={this.props.closeInterviewScreen}
        modal={false}
        autoScrollBodyContent={true}
        title="Interview Screen"
        open={true}
      >
        <Questions />
        <AdditionalComments />
        <TimerNow />
      </Dialog>
    )
  }
}

export default CandidateInterviewHomepage;
