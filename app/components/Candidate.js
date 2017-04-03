import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/core';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      candidates: this.props.candidates,
      dropDownValue: 0,
      selectedCandidateID: -1,
    }
  }

  saveCandidateStatus = (candidate, status) => {
    const candidates = this.state.candidates.slice();
    candidates[candidate.id].status = status;
    this.setState({candidates});
  }

  selectedCandidateIDChange = (selectedCandidateID) => {
    if (selectedCandidateID === this.state.selectedCandidateID) {
      this.setState({selectedCandidateID: -1});
    } else {
      this.setState({selectedCandidateID});
    }
  }

  handleDropDownValueChange = (event, index, dropDownValue) => {
    this.setState({dropDownValue});
    this.filterListElements(dropDownValue);
  }

  filterListElements = (value) => {
    let candidates =  this.state.candidates.slice();
    const compareStatus = (a, b) => {
      if (b.status === "Accepted" && a.status !== "Accepted" || b.status === "Shortlisted" && a.status === "Rejected") {
        return 1;
      }
    };
    switch (value) {
      case 1:
        candidates = _.sortBy(candidates, i => i.name);
        break;
      case 2:
        candidates = _.sortBy(candidates, i => i.profession);
        break;
      case 3:
        candidates = candidates.sort(compareStatus);
        break;
      default:
        break;
    }
    this.setState({candidates});
  }

  render() {

    const renderCandidateInfo = () => {
      const candidate = _.find(this.state.candidates, {id: this.state.selectedCandidateID}) || 0;
      const {name, profession, status} = candidate;
      let changedStatus = status;
      const changeStatus = e => changedStatus = e.target.value;
      return (
        <List>
          <ListItem primaryText={name} style={{"fontWeight": "bold"}}/>
          <Divider />
          <ListItem primaryText={profession} />
          <Divider />
          <RadioButtonGroup
            style={{"marginTop": "10px"}}
            name="decideFuture"
            valueSelected={status}
          >
            <RadioButton
              style={{"marginTop": "5px"}}
              value="Undecided"
              label="Undecided"
              onTouchTap={changeStatus}
            />
            <RadioButton
              style={{"marginTop": "5px"}}
              value="Accepted"
              label="Accept"
              onTouchTap={changeStatus}
            />
            <RadioButton
              style={{"marginTop": "5px"}}
              value="Shortlisted"
              label="Shortlist"
              onTouchTap={changeStatus}
            />
            <RadioButton
              style={{"marginTop": "5px"}}
              value="Rejected"
              label="Reject"
              onTouchTap={changeStatus}
            />
          </RadioButtonGroup>
          <RaisedButton
            style={{"marginTop": "10px", "width": "100%"}}
            label="Save"
            onTouchTap={() => this.saveCandidateStatus(candidate, changedStatus)}
          />
        </List>
        );
      }

    return(
      <div>
        <DropDownMenu value={this.state.dropDownValue} onChange={this.handleDropDownValueChange}>
          <MenuItem value={0} primaryText="Filter" />
          <MenuItem value={1} primaryText="Name" />
          <MenuItem value={2} primaryText="Profession" />
          <MenuItem value={3} primaryText="Status" />
        </DropDownMenu>
        <Table
          style={{"width": "50%"}}
        >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Profession</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
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
                  <TableRowColumn>{candidate.name}</TableRowColumn>
                  <TableRowColumn>{candidate.profession}</TableRowColumn>
                  <TableRowColumn>{candidate.status}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Drawer
          openSecondary={true}
          open={this.state.selectedCandidateID!=-1}
        >
          {
            this.state.selectedCandidateID!=-1 ?
              renderCandidateInfo()
              : null
          }
        </Drawer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return (
    {
      candidates: state.candidates
    }
  )
}

export default connect(mapStateToProps)(Candidates);
