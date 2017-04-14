import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {orange500, blue500} from 'material-ui/styles/colors'
import interviewQuestions from './questionnaire';
import TextField from 'material-ui/TextField';
import Timer from 'react-timer';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import '../styles/frontpage.sass';

class CandidateInterviewHomepage extends React.PureComponent {
  constructor(){
    super();
      this.state={
        value: "Developer",
    };
  }

  handleChange = (e, i, value) => {
    this.setState({value})
  }

  handleToggle = () => this.setState({open: !this.state.open});

  componentDidMount(){
    document.getElementsByClassName('react-timer')[0].children[3].innerHTML="start";
  }

  render() {
    const OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
    const allquestions = interviewQuestions[this.state.value].map((question, idx)=>{
      return (
        <div key={idx} className="questions">
              <TextField id="field"
                  style={{width:"80%"}}
                  floatingLabelText={question}
               />
        </div> )
       })

    const styles = {
      floatingLabelStyle: {
        color: orange500,
      },
      floatingLabelFocusStyle: {
        color: blue500,
      },
    };


    const SelectPosition = () => (
      <div>
        <SelectField
            floatingLabelText="Position"
            onChange={this.handleChange}
            value={this.state.value}
        >
        <MenuItem primaryText="Developer" value={"Developer"}/>
        <MenuItem primaryText="Designer" value={"Designer"}/>
        <MenuItem primaryText="Engineer" value={"Engineer"}/>
        </SelectField>
      </div>
    )
    const TimerNow = () => {
              return (
                  <div>
                    <Timer options={OPTIONS}  />
                  </div>
              )}

    return(
      <div>
        <SelectPosition />
        {allquestions}
        <TimerNow />
      </div>
    )
  }
}

export default CandidateInterviewHomepage;
