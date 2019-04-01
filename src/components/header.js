import React from 'react';
import menu from '../img/hamburgerMenu.png';
import './header.scss';
import './button.scss';

class Header extends React.Component{
  render(){
    return(
      <div id='header-text'>
        <header>
          <div id='menu'>
            <img src={menu} alt='menu' />
            <div id='side-nav'>
              <ul>
              <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <h2>Hi! I'm Lena, a Full-Stack Software Engineer</h2>
          <p>
            A background in education, photography and business with a passion for creating useful lasting applications.
          </p>
          <p>
            Lets create something amazing together.
          </p>
          <a id="button" href="#portfolio">See More</a>
        </header>
      </div>
    );
  };
}

export default Header;