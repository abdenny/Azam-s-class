import React from 'react';
import Header from './Header.layout';
import Footer from './Footer.layout';

const BaseLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default BaseLayout;
