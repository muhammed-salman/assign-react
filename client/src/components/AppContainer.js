import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="container-fluid mt-3 pb-2">
        {children}
      </div>
      <Footer />
    </div>
  );
};
