import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/core';
import uuid from 'uuid/v4';


import { Table, TableBody, TableHeader, TableHeaderColumn,
         TableRow, TableRowColumn } from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import CandidateChangePopup from './CandidateChangePopup';

import candidateChange from '../actions/candidateChange';
import addCandidate from '../actions/addCandidate';

function mapStateToProps(state) {
  return (
    {
      candidates: state.candidates,
    }
  )
}

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      candidates: this.props.candidates,
      dialogueBoxId: "-1",
      filterValue: "",
      editable: false
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({candidates: newProps.candidates})
  }

  componentWillMount() {
    this.filterListElements("Name");
  }

  showCandidateDialogue = (dialogueBoxId) =>  {
    this.setState({dialogueBoxId});
  }

  closeDialogueBox = () => {
    this.setState({dialogueBoxId: "-1"});
  }

  saveChangedCandidate = (candidate, isNew) => {
    if(isNew) {
      this.props.addCandidate(candidate)
    } else {
      this.props.candidateChange(candidate);
    }
  }

  filterListElements = (value) => {
    let candidates =  this.state.candidates.slice();
    const compareStatus = (a, b) => {
      if (b.status === "Accepted" && a.status !== "Accepted" || b.status === "Shortlisted" && a.status === "Rejected") {
        return 1;
      }
    };
    switch (value) {
      case "Name":
        candidates = _.sortBy(candidates, i => i.name);
        break;
      case "Profession":
        candidates = _.sortBy(candidates, i => i.profession);
        break;
      case "Status":
        candidates = candidates.sort(compareStatus);
        break;
      default:
        break;
    }
    this.setState({candidates});
  }

  render() {
    const {candidates,filterValue} = this.state;
    const header =  ["Name", "Profession", "Status"];
    const filterCandidates = _.filter(candidates, (c) => {
      for (let i = 0; i < header.length; ++i) {
        if (c[header[i].toLowerCase()].toLowerCase().includes(filterValue)) {
          return true;
        }
      }
    });

    const CandidatesTable = () => {
      const fontStyle = this.state.editable ? {"fontStyle": "italic"} : {};
      return (
        <Table
          selectable={false}
          style={{"width": "50%"}}
        >
          <TableHeader
            style={{"backgroundColor": "#00BCD4"}}
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              {
                header.map(column => (
                  <TableHeaderColumn
                    key={column}
                  >
                    <FlatButton
                      style={{"color": "white"}}
                      label={column}
                      onTouchTap={() => this.filterListElements(column)}
                    />
                  </TableHeaderColumn>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            style={fontStyle}
          >
            {filterCandidates.map((candidate, index) => {
              return(
                <TableRow
                  style={{"cursor": "pointer"}}
                  key={candidate.id}
                  onTouchTap={
                    () => {
                      if (this.state.editable)
                        this.setState({dialogueBoxId: candidate.id})
                    }
                  }
                >
                  {header.map(column => (
                    <TableRowColumn key={column}>{candidate[column.toLowerCase()]}</TableRowColumn>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      );
    };

    const CandidateChange = () => {
      return (
        <CandidateChangePopup
          closeDialogueBox={this.closeDialogueBox}
          saveChangedCandidate={this.saveChangedCandidate}
          candidate={
            _.find(this.state.candidates, {id: this.state.dialogueBoxId})
           || {
            id: uuid(), name: "", profession: "", status: "",isNew: true
          }}
        />
      );
    };


    return(
      <div>
        <TextField
          floatingLabelText="Filter"
          value={this.state.filterValue}
          onChange={(e) => this.setState({filterValue: e.target.value.toLowerCase()})}
        />
        <FlatButton
          style={{"backgroundColor": "#00BCD4", "color": "white", "marginLeft": "20px"}}
          label="add"
          onTouchTap={() => this.setState({dialogueBoxId: "new"})}
        />
        <FlatButton
          style={{"backgroundColor": "#00BCD4", "color": "white", "marginLeft": "20px"}}
          label="edit"
          onTouchTap={() => this.setState({editable: !this.state.editable})}
        />
        <CandidatesTable />
        {
          (() => {
            if (this.state.dialogueBoxId !== "-1") {
              return <CandidateChange />
            }
          })()
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, {candidateChange, addCandidate})(Candidates);
