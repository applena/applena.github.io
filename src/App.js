import React, { Component } from 'react';
import Layout from './components/layout';
// import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import "/node_modules/reveal.js/dist/reveal.css";
import "/node_modules/reveal.js/dist/theme/sky.css";

let deck = new Reveal({
  plugins: [Markdown]
})
deck.initialize();

class App extends Component {
  render() {
    return (
      // <Layout>
      {/* <Portfolio /> */ }
      // {/* <About />
      // <Contact /> */}
      // </Layout>

    );
  }
}

export default App;
