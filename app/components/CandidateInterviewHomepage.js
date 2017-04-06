import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Candidate from './Candidate';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {orange500, blue500} from 'material-ui/styles/colors'
import interviewQuestions from './questionnaire';

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
    const allquestions = interviewQuestions[this.state.value].map((question, idx)=>{
      return (
        <li key={idx}>
          {question}
        </li>
    )
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
          <div className="questionlist">
          {allquestions}
          </div>
      </div>
    )
  }
}

export default CandidateInterviewHomepage;
