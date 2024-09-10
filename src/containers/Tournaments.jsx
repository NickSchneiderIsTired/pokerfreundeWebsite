import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import '../App.css';
import tournaments from '../res/tournaments.json';


function Tournaments() {
  /*const [tournaments, setTournaments] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const json = await fetch("tournaments.json")
        .then(r => r.json())
        .catch(err => console.log(err));
      setTournaments(json?.data || []);
    }
    fetchData();
  }, []);*/

  return (
    <div className="App">
      <div className="App-header">
        <div className='content'>
          <h2>Spieltermine 2024/25</h2>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>Turnier</TableCell>
                <TableCell>Datum</TableCell>
                <TableCell>Uhrzeit</TableCell>
                <TableCell>Ort</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tournaments.map((row, idx) => 
                <TableRow key={idx}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.start}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.location}</TableCell>
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
