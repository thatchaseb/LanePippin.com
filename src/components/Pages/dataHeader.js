import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';

const dataHeader = () => {
  return (
    <div>
        
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">
            To Main Site
          </Link>
          <div className="right menu">
            <Link to="/client" className="item">
              To Client Home
            </Link>
            <GoogleAuth />
          </div>
        </div>
        <Outlet/>
    </div>
  );
};

export default dataHeader;