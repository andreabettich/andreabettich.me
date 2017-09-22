import React from 'react';

const WhoAmI = props => {
  return (
    <div className="small-12 who-am-i">
      <p>
        Tschou. My Name is <b>Andrea Bettich</b>.
      </p>
      <p>I'm a 25 year old Web Developer from Switzerland.</p>
      <p>
        I have experience in <b className="language">Java</b>,{' '}
        <b className="language">JavaScript</b>,{' '}
        <b className="language">Python</b>.
      </p>
      <p>
        To free my mind I enjoy <b>Photography</b>, play <b>Badminton</b> and
        brew <b>CraftBeer</b>.
      </p>
    </div>
  );
};

export default WhoAmI;
