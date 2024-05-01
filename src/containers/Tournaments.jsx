import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import '../App.css';

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch("tournaments.json")
        .then(r => r.json())
        .catch(err => console.log(err));
      setTournaments(json?.data || []);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className='content'>
          <h2>Spieltermine 2024/25</h2>
          <Table>
            <TableBody>
              {tournaments.map((row, idx) => 
                <TableRow key={idx}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.start}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Tournaments;
