import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'


export class ScoreRow extends Component {
  render() {
    return (      
        <TableRow>
          <TableCell align="center" component="th" scope="row"><strong>{this.props.i + 1}</strong></TableCell>
          <TableCell align="center"><strong>{this.props.score.clicks}</strong> clicks</TableCell>
          <TableCell align="center">{this.props.score.user.name}</TableCell>
          <TableCell align="center">{this.props.score.user.id}</TableCell>
        </TableRow>
    )
  }
}

export default ScoreRow
