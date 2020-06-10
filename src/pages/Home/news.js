// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//Import components

import NewsBox from "../../components/Shared/news-box";

// import images
import blog01 from '../../images/account/bg.jpg';
import blog02 from '../../images/illustrator/aboutimg.png';


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {

            blogs : [
                { id : 1, image : blog01, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 2, image : blog02, title : "How apps is changing the IT world", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },


]
}
}

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);

        var blogs = document.getElementsByName("blog");
        for(var i=0; i<blogs.length; i++){
            blogs[i].classList.remove("mt-4");
            blogs[i].classList.add("mb-4");
        }
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/* breadcrumb */}

                <section className="section">

                    <Container>
                        <Row>
                            {/* blog box */}
                            <NewsBox blogs={this.state.blogs} />


                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default News;
