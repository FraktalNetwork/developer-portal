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

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : stairs, title : "Instantly Transfer Money", description : "Send money anywhere in the world in seconds, for a few cents." },
                { id : 2, imgUrl : device, title : "Be Free", description : "All you need is an internet connection. No bank account required." },
                { id : 3, imgUrl : code, title : "Preserve Earth", description : "Electricity consumed by Fraktal is compensated by planting trees."},
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
                <h4 className="title mb-4">Fraktal empowers you to...</h4>
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
