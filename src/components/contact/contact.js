import React from 'react';
import './contact.scss';
import '../button.scss';

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    };
  }

  render(){

    this.sendForm = (e) => {
      e.preventDefault();
      this.setState({ buttonText: '...Sending'});
    }
    return(
      <div id="contact">
        <div id="background-black">
          <h2>Get In Touch</h2>
          <p>Thanks so much for taking a look! I'd love to meet you over coffee to talk more!</p>
          <p>
            applena@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;