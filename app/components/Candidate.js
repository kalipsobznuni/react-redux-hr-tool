import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/core';


import { Table, TableBody, TableHeader, TableHeaderColumn,
         TableRow, TableRowColumn } from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import CandidateChangePopup from './CandidateChangePopup';

import candidateChange from '../actions/candidateChange';

function mapStateToProps(state) {
  return (
    {
      candidates: state.candidates
    }
  )
}

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      candidates: this.props.candidates,
      dialogBoxId: -1,
      filterValue: ""
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({candidates: newProps.candidates})
  }

  componentWillMount() {
    this.filterListElements("Name");
  }

  showCandidateDialogue = (dialogBoxId) =>  {
    this.setState({dialogBoxId});
  }

  closeDialogueBox = () => {
    this.showCandidateDialogue(-1);
  }

  saveChangedCandidate = (changedCandidate) => {
    this.props.candidateChange(changedCandidate);
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
    const filterCandidates = _.filter(candidates, (c) => {
      return c.name.toLowerCase().includes(filterValue.toLowerCase())
      ||
      c.profession.toLowerCase().includes(filterValue.toLowerCase())
      ||
      c.status.toLowerCase().includes(filterValue.toLowerCase());
    });

    const header =  ["Name", "Profession", "Status"];
    return(
      <div>
        <TextField
          floatingLabelText="Filter"
          value={this.state.filterValue}
          onChange={(e) => this.setState({filterValue: e.target.value})}
        />
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
          >
            {filterCandidates.map((candidate, index) => {
              return(
                <TableRow
                  style={{"cursor": "pointer"}}
                  key={candidate.id}
                  onTouchTap={() => this.showCandidateDialogue(candidate.id)}
                >
                  {header.map(column => (
                    <TableRowColumn key={column}>{candidate[column.toLowerCase()]}</TableRowColumn>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {
          (() => {
            if (this.state.dialogBoxId !== -1) {
              return (
                <CandidateChangePopup
                  closeDialogueBox={this.closeDialogueBox}
                  saveChangedCandidate={this.saveChangedCandidate}
                  candidate={_.find(this.state.candidates, {id: this.state.dialogBoxId})}
                />
              )
            }
          })()
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, {candidateChange})(Candidates);
