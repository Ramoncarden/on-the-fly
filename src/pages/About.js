import React from 'react';

const classes = {
  container: 'h-screen flex justify-center items-center bg-green-500',
  h1: 'text-9xl uppercase font-black'
};

const About = () => {
  return (
    <div>
      <div className={classes.container}>
        <h1 className={classes.h1}>About Page</h1>
      </div>
    </div>
  );
};

export default About;
