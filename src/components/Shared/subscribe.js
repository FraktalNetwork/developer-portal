import React from 'react'

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }

    render() {
        return (
                <form action="https://cool.us16.list-manage.com/subscribe/post" method="POST" noValidate>
                  <input type="hidden" name="u" value="eb05e4f830c2a04be30171b01"/>
                <input type="hidden" name="id" value="8281a64779"/>
                <label htmlFor='MERGE0'>

                    <input
                        type="email"
                        name="EMAIL"
                        id="MERGE0"
                        value={this.state.emailValue}
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                        autoCapitalize="off"
                        autoCorrect="off"
                     />
                </label>


                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">


                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                  
                </div>
              </form>
        )
    }
}

export default Subscribe
