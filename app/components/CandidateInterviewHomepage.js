import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Candidate from './Candidate';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {orange500, blue500} from 'material-ui/styles/colors'
import {newquestions} from './questionnaire';
console.log(newquestions)

class CandidateInterviewHomepage extends React.PureComponent {
  constructor(){
    super();
    injectTapEventPlugin();
      this.state={
        value: 0
    };
  }

handleChange(e) {
  alert("position chosen")
}

  render() {
    const allquestions = newquestions.map((question, idx)=>{
      console.log(question)
      return (
        <div className="everyquestion" key={idx*idx}>
          <li className="question" key={`${idx}`}>
           {question.map((chosen, idx)=>{
             return(
               <ul key={idx}>
                {
                     chosen.question
                }
               </ul>
             )
           })}
          </li>
      </div>
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
        >

        <MenuItem primaryText="Developer" value={0}/>
        <MenuItem primaryText="Designer" value={1}/>
        <MenuItem primaryText="Engineer" value={2}/>
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
