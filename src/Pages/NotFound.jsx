import React from 'react';

import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment className=" text-center">
      <h1 className=""> Not found </h1>
      <h2> Go to home page </h2>
      <NavLink  to="/"> Home</NavLink>
    </React.Fragment>
  );
};

export default NotFound;
