// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Components
import Feature from "../../components/Shared/Feature";

// Import images
import stairs from '../../images/icon/stairs.svg';
import code from '../../images/icon/code.svg';
import device from '../../images/icon/device.svg';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : stairs, title : "Instant Transfers Globally", description : "Send money and financial assets anywhere in the universe in seconds." },
                { id : 2, imgUrl : device, title : "Available to Everyone", description : "No bank account needed. No extensive documents or proof of address. Just a basic internet connection." },
                { id : 3, imgUrl : code, title : "100% Sustainable and Eco-Friendly", description : "A portion of network fees is donated to planting trees to offset the electricty used by our technology. "},
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
