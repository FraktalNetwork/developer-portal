import React from 'react';
import {Component} from 'react';
import Typist from 'react-typist';

import enterprise from '../../images/enterprise.jpg';

const Banner = () => {

    return(
        <section className="banner-one" id="banner" style={{backgroundImage: `url(${enterprise}) center center` }}>
            <img src="/zimedassets/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
            <img src="/zimedassets/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

            <img src="/zimedassets/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
            <img src="/zimedassets/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
            <img src="/zimedassets/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
            <img src="/zimedassets/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

            <div className="container">
                <img src="/zimedassets/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1"/>

                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">

                            <h3><Typist>
                            <span> Make a Difference.</span>
                            <Typist.Backspace count={18} delay={1100} />

                            <span>Start Today.</span>
                            </Typist></h3>

                            <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target">Join Fraktal</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}
export default Banner;
