import React from 'react';
import './Loader.css';
import svg from './Loader.svg';

const Loader = () => {
  return (
    <>
      <div className="ajax-loader">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`paw paw${i + 1} no-cssanimations`}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <use href={`${svg}#paw`} />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loader;
