import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center bg-kitchen-img bg-cover">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">On The Fly</h1>
      <Link
        to="/signup"
        className="py-6 px-10 bg-yellow-600 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center"
      >
        Join Now!
        <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      </Link>
    </div>
  );
};

export default Title;
