import React from 'react';
import {changeQuestion, addQuestion, removeQuestion} from '../actions/interviewQuestions';
import {addProfession, removeProfession} from '../actions/add-removePosition';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';

function mapStateToProps(state) {
  return (
    {
      questions: state.questions,
    }
  )
};

class CustomQuestions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      professions: Object.keys(this.props.questions),
      addProfession: "",
      profession: "Developer",
      level: "Intern",
    }
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      questions: newProps.questions,
      professions: Object.keys(newProps.questions)
    });
  };

  render() {
    const levels = ["Intern", "Junior", "Middle", "Senior"];
    const questions = this.state.questions[this.state.profession][this.state.level];

    const RenderProfessions = () => {
      return (
        <DropDownMenu
          value={this.state.profession}
          onChange={(e, i, profession) => this.setState({profession})}
        >
          {
            this.state.professions.map(p => <MenuItem key={p} value={p} primaryText={p} />)
          }
        </DropDownMenu>
      )
    };

    const RenderLevels = () => {
      return (
        <DropDownMenu
          value={this.state.level}
          onChange={(e, i, level) => this.setState({level})}
        >
          {
            levels.map(l => <MenuItem key={l} value={l} primaryText={l}/>)
          }
        </DropDownMenu>
      )
    };

    return (
      <div>
        <RenderProfessions />
        <RenderLevels />
        <br/>
        <TextField
          value={this.state.addProfession}
          floatingLabelText="Add a new profession"
          onChange={(e) => this.setState({addProfession: e.target.value})}
        />
        <FlatButton
          primary={true}
          label="Save"
          onTouchTap={() => {
            this.props.addProfession(this.state.addProfession);
            this.setState({addProfession: ""})
          }}
          style={{marginBottom: "20px"}}
        />
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <TextField
                name={"question" + index}
                style={{marginTop: "10px", marginLeft: "10px", width: "80%"}}
                value={question}
                onChange={
                  (e) => {
                    this.props.changeQuestion({
                      profession: this.state.profession,
                      level: this.state.level,
                      question:e.target.value,
                      index: index
                    })
                  }
                }
              />
              <FlatButton
                onTouchTap={() => this.props.removeQuestion(this.state.profession, this.state.level, index)}
                label="delete"
              />
            </div>
          )
        })
      }
      <FlatButton
        style={{marginTop: "20px"}}
        primary={true}
        label="add question"
        onTouchTap={() => this.props.addQuestion(this.state.profession, this.state.level)}
      />
      </div>
    )
  }
}

export default connect(mapStateToProps, {removeQuestion, changeQuestion, addQuestion, addProfession, removeProfession})(CustomQuestions);
