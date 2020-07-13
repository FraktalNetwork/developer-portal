import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class MailSubscription extends Component {
  render() {
    return (
        <Mailchimp
        action='https://network.us10.list-manage.com/subscribe/post?u=a29a44d2818a3fc3e57f40c75&amp;id=5beaa910d9'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Enter your Email',
            type: 'email',
            required: true
          }
        ]}
        messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "This email is already used.",
      button: "Subscribe"
    }
  }

  className='testSubscribe'
        />
    );
  }
}

export default MailSubscription;
