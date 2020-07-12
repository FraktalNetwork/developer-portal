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
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
    );
  }
}

export default MailSubscription;
