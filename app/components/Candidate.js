import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      candidates: this.props.candidates,
      dropDownValue: 0,
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
        candidates = _.sortBy(candidates, function(i) {return i.name});
        break;
      case 2:
        candidates = _.sortBy(candidates, function(i) {return i.profession});
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
    return(
      <div>
        <DropDownMenu value={this.state.dropDownValue} onChange={this.handleDropDownValueChange}>
          <MenuItem value={0} primaryText="Filter" />
          <MenuItem value={1} primaryText="Name" />
          <MenuItem value={2} primaryText="Profession" />
          <MenuItem value={3} primaryText="Status" />
        </DropDownMenu>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Profession</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.candidates.map((candidate, index) => {
              return(
                <TableRow key={index}>
                  <TableRowColumn>{candidate.name}</TableRowColumn>
                  <TableRowColumn>{candidate.profession}</TableRowColumn>
                  <TableRowColumn>{candidate.status}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
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
