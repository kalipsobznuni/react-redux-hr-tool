import React from 'react';

export default class  Frontpage extends React.PureComponent {

render() {
  return(
  <div className="bigBody">
  <button className="filter"> Filter </button>
  <div className="container">
        <table className="container2">
      	<thead>
      		<tr>
      			<th><h1>Candidates</h1></th>
      			<th><h1>Position</h1></th>
      			<th><h1>Status</h1></th>
      			<th><h1>InterviewDate</h1></th>
      		</tr>
      	</thead>
      	<tbody>
      		<tr>
      			<td>Narek Ghevandiani</td>
      			<td>Developer</td>
      			<td>Short-listed</td>
      			<td>11/02/2017</td>
      		</tr>
      		<tr>
          <td>Narek Ghevandiani</td>
          <td>Developer</td>
          <td>Rejected</td>
          <td>10/05/2017</td>
      		</tr>
      		<tr>
          <td>Levon Hovhannisyan</td>
          <td>Designer</td>
          <td>Short-listed</td>
          <td>10/05/2017</td>
      		</tr>
          <tr>
          <td>Narek Ghevandiani</td>
          <td>Developer</td>
          <td>Accepted</td>
          <td>11/05/2017</td>
      		</tr>
          <tr>
          <td>Hakob Paronyan</td>
          <td>Developer</td>
          <td>Short-listed</td>
          <td>10/05/2017</td>
      		</tr>
          <tr>
          <td>Narek Ghevandiani</td>
          <td>Designer</td>
          <td>Rejected</td>
          <td>10/05/2017</td>
      		</tr>
          <tr>
          <td>Levon Hovhannisyan</td>
          <td>Designer</td>
          <td>Short-listed</td>
          <td>10/02/2017</td>
          </tr>
          <tr>
          <td>Hakob Paronyan</td>
          <td>Developer</td>
          <td>Short-listed</td>
          <td>10/02/2017</td>
          </tr>
          <tr>
          <td>Hakob Paronyan</td>
          <td>Developer</td>
          <td>Short-listed</td>
          <td>10/02/2017</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
      )
    }
    };
