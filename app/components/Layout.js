import React from 'react';
import Navbar from './Navbar';

export default ({ children }) => (
  <div>
    <Navbar />
    <div className="container">
      {children}
    </div>
  </div>
);