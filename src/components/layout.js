import React from 'react';
import Header from './header';
import Footer from './footer/footer';
import { BrowserRouter } from 'react-router-dom';

const Layout = (props) => {
  return(
    <BrowserRouter>
      <Header />
      <div className="contentContainer">
        <main className='layout-main'>
          {props.children}
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  )
};

export default Layout;