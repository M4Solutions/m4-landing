import React from "react";

const Button = ({ size, children }) => {

  if (size === 'default' || '') {
    return (
      <button className="px-3 py-1.5 text-sm text-white duration-150 bg-light-blue rounded-lg hover:bg-indigo-700 active:shadow-lg">
          {children}
      </button>
    )

  } else if (size === 'md') {
    return (
      <button className="px-5 py-3 text-white duration-150 bg-light-blue rounded-lg hover:bg-indigo-700 active:shadow-lg">
        {children}
      </button>
    )

  } else if (size === 'lg') {
    return (
      <button className="px-6 py-3.5 text-white bg-light-blue rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
        {children}
      </button>
    )

  } else if (size === 'xl') {
    return (
      <button className="px-7 py-4 text-white duration-150 bg-light-blue rounded-lg hover:bg-indigo-700 active:shadow-lg">
        {children}
      </button>
    )
  }
};

export default Button;
