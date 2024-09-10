import React from 'react';
import '../App.css';

function Location() {
  return (
    <div className="App">
      <div className="App-header">
        <div className='content'>
          <h1>Location</h1>
          <p>Unser Vereinsheim befindet sich im Schlossgarten Türkheim</p>
          <div className='iframeContainer'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.932074070268!2d10.618827528239686!3d48.05814194103948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c1084709b0773%3A0x148c80075ce02fdf!2sSchlossgarten!5e0!3m2!1sde!2sde!4v1725957744344!5m2!1sde!2sde"
              width="100%"
              height="450"
              allowFullScreen=""
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
