import React from 'react';
import { Link } from 'react-router-dom';

const classes = {
  container: 'grid grid-rows-4 text-center items-center bg-green-500'
};

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? classes.container : 'hidden'}>
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/menu">
        Menu
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/signin">
        Sign In
      </Link>
    </div>
  );
};

export default Dropdown;
