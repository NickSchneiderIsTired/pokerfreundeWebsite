import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import '../App.css';

function Tournaments() {
  return (
    <div className="App">
      <div className="App-header">
        <div className='content'>
          <h1>Spieltermine 2023/24</h1>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>10. SnG Turnier</TableCell>
                <TableCell>Beginn 17:30</TableCell>
                <TableCell>03.02.24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10. Freeze Out Turnier</TableCell>
                <TableCell>Beginn 17:30</TableCell>
                <TableCell>17.02.24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1. Sachpreisturnier</TableCell>
                <TableCell>Beginn 17:30</TableCell>
                <TableCell>02.03.24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2. Sachpreisturnier</TableCell>
                <TableCell>Beginn 17:30</TableCell>
                <TableCell>16.03.24</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jahreshauptversammlung</TableCell>
                <TableCell>Beginn t.b.d.</TableCell>
                <TableCell>13.04.24</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;
