import React from 'react';
import '../App.css';

function Location() {
  return (
    <div className="App">
      <div className="App-header">
        <div className='content'>
          <h1>Location</h1>
          <p>Unser Vereinsheim befindet sich im Landgasthof Nassenbeuren</p>
          <div className='iframeContainer'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10662.402080480242!2d10.5201559!3d48.0793533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c0588f385e1eb%3A0xac6f9c49c449923e!2sLandgasthof%20Nassenbeuren!5e0!3m2!1sde!2sde!4v1699883632402!5m2!1sde!2sde"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
