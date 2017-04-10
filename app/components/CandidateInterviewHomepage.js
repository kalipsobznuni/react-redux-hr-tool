import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Candidate from './Candidate';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {orange500, blue500} from 'material-ui/styles/colors'
import interviewQuestions from './questionnaire';
import TextField from 'material-ui/TextField';
import Timer from 'react-timer';
import '../styles/frontpage.sass';

class CandidateInterviewHomepage extends React.PureComponent {
  constructor(){
    super();
    injectTapEventPlugin();
      this.state={
        value: "Developer"
    };
  }

  handleChange = (e, i, value) => {
    this.setState({value})
  }

  render() {
    const OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
    const allquestions = interviewQuestions[this.state.value].map((question, idx)=>{
      return (
        <div className="questions">
              <TextField key={idx} id="field"
                  style={{width:"80%"}}
                  //fullWidth:true
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

    return(
      <div>
        <SelectPosition />
        {allquestions}
        <div>
          <Timer options={OPTIONS} />
        </div>
      </div>
        )
  }
}

export default CandidateInterviewHomepage;
