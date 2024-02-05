/* eslint-disable no-undef */
import React from 'react';
import '../App.css';
import { Button, Grid } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';
import MTT from '../res/MTT.pdf'
import SnG from '../res/SnG.pdf'

function Rankings() {
  return (
    <div className="App">
      <div className="App-header">
        <div className='content'>
          <h1>Ranglisten</h1>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                endIcon={<PictureAsPdf style={{ color: 'black' }} color="inherit"/>}
                variant='contained'
                target="_blank"
                href={MTT}
                download={"MTT.pdf"}
                style={{ color: 'black' }}
              >
                MTT
              </Button>
            </Grid>
            <Grid item>
              <Button
                endIcon={<PictureAsPdf style={{ color: 'black' }} color="inherit"/>}
                variant='contained'
                target="_blank"
                href={SnG}
                download={"SnG.pdf"}
                style={{ color: 'black' }}
              >
                SnG
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Rankings;