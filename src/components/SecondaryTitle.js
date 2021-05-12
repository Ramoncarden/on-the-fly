import React from 'react';

const classes = {
  positioning: 'flex flex col justify-center items-center mt-36 mb-36',
  text: 'font-courgette lg:text-6xl md:text-5xl sm:text-3xl text-2xl text-green-700'
};

const SecondaryTitle = () => {
  return (
    <div className={classes.positioning}>
      <h2 className={classes.text}>There's something for hobbyists and professionals at On The Fly</h2>
    </div>
  );
};

export default SecondaryTitle;
