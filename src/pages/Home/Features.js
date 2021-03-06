// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Components
import Feature from "../../components/Shared/Feature";

// Import images
import stairs from '../../images/icon/stairs.svg';
import code from '../../images/icon/code.svg';
import device from '../../images/icon/device.svg';
import partners from '../../images/partners.png';
import saveTheWorld from '../../images/icon/save-the-world.svg';
import sendMoney from '../../images/icon/send-money.svg';
import chess from '../../images/icon/sport.svg';
import people from '../../images/icon/people.svg';
import internet from '../../images/icon/internet.svg';
import rocket from '../../images/icon/rocket.svg';
import btcRocket from '../../images/icon/btcrocket.svg';
import exchange from '../../images/icon/exchange.svg';



class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : exchange, title : "Equal", description : "Everyone has the exact same opportunity to participate and benefit." },
                { id : 2, imgUrl : internet, title : "Inclusive", description : "Fraktal is open to everyone and has no restrictions." },
                { id : 3, imgUrl : saveTheWorld, title : "Sustainable", description : "Resources consumed by Fraktal are compensated by planting trees."},
            ],
        }
    }

    componentDidMount(){
        var featureboxes = document.getElementsByName("featurebox");
        for(var i=0; i<featureboxes.length; i++) {
            if(i!==0){
                featureboxes[i].classList.add("mt-5");
                featureboxes[i].classList.add("mt-sm-0");
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section pt-0">
                <div className="benefitsTitle">
                <h4 className="title mb-4">The Fraktal Ecosystem is</h4>
                </div>


                    <Container>
                        {/* feature box */}
                        <Feature featureArray={this.state.features} isCenter={true} />
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;
