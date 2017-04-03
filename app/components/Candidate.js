import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/core';


import { Table, TableBody, TableHeader, TableHeaderColumn,
         TableRow, TableRowColumn } from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'

import changeStatus from '../actions/changeStatus';

function mapStateToProps(state) {
  return (
    {
      candidates: state.candidates
    }
  )
}

class Candidates extends React.PureComponent {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      candidates: this.props.candidates,
      selectedCandidateID: -1,
    }
  }

  componentWillMount() {
    this.filterListElements("Name");
  }

  saveCandidateStatus = (candidateID, status) => {
    this.props.changeStatus(candidateID, status);
  }

  selectedCandidateIDChange = (selectedCandidateID) => {
    if (selectedCandidateID === this.state.selectedCandidateID) {
      this.setState({selectedCandidateID: -1});
    } else {
      this.setState({selectedCandidateID});
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
    const header =  ["Name", "Profession", "Status"];
    return(
      <div>
        <Table
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
            deselectOnClickaway={false}
          >
            {this.state.candidates.map((candidate, index) => {
              return(
                <TableRow
                  style={{"cursor": "pointer"}}
                  key={candidate.id}
                  onTouchTap={() => this.selectedCandidateIDChange(candidate.id)}
                >
                  {header.map(column => (
                    <TableRowColumn key={column}>{candidate[column.toLowerCase()]}</TableRowColumn>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps, {changeStatus})(Candidates);
