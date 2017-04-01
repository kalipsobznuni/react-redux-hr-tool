import React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: this.props.candidates,
    }
  }
  render() {
    return(
      <Table selectable={false}>
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
