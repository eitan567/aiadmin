import "./adminTable.scss"    
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = () => {
        
      const products = [{}
        // {'name': 'Frozen yoghurt', 159, 6.0, 24, 4.0},
        // {'name': 'Ice cream sandwich', 237, 9.0, 37, 4.3},
        // {'name': 'Eclair', 262, 16.0, 24, 6.0},
        // {'name': 'Cupcake', 305, 3.7, 67, 4.3},
        // {'name': 'Gingerbread', 356, 16.0, 49, 3.9},
      ];

  return (    
    <TableContainer component={Paper} className="adminTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">TrackID</TableCell>
            <TableCell className="tableCell" align="right">Calories</TableCell>
            <TableCell className="tableCell" align="right">Fat&nbsp;(g)</TableCell>
            <TableCell className="tableCell" align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell className="tableCell" align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Table
