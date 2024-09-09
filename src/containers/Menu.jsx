import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router';
import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import tournaments from '../res/tournaments.json';

function Menu() {
  const navigate = useNavigate();
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
          <h2>Pokerfreunde 2018 e.V.</h2>
          <p>
            Pokern im Verein ohne Geldeinsätze
          </p>
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
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={() => navigate("/register")}
              variant='contained'
            >
              Turnieranmeldung
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
