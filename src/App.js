import React, { Component } from 'react';
import Layout from './components/layout';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <Layout>
        <Portfolio />
        <About />
        <Contact />
      </Layout>
    );
  }
}

export default App;
