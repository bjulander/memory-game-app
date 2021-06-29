import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'


export class Score extends Component {
  render() {
    return (      
      <TableRow>
        <TableCell align="center" component="th" scope="row"><strong>{this.props.i + 1}</strong></TableCell>
        <TableCell align="center"><strong>{this.props.score.time}</strong> seconds</TableCell>
        <TableCell align="center">{this.props.score.user.name}</TableCell>
      </TableRow>
    )
  }
}

export default Score
