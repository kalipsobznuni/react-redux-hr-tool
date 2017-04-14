import React from 'react';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import {orange500, blue500} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField';
import Timer from 'react-timer';
import Dialog from 'material-ui/Dialog';
import '../styles/frontpage.sass';

class CandidateInterviewHomepage extends React.PureComponent {
  constructor(props){
    super(props);
  }

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
            this.props.questions.map((question, index) => {
              return (
                <TextField
                  key={index}
                  floatingLabelText={question}
                  fullWidth={true}
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
        <TimerNow />
      </Dialog>
    )
  }
}

export default CandidateInterviewHomepage;
