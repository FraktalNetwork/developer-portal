import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import TaskBox from "./task-box";

//Import images


class Tasks extends Component {
    state = {
        jobs : [
            { id : 1, ext : "community-admin",  title : "Community Admin", time : "Monthly", },
            { id : 2, ext : "placement-prof",  title : "Placement Professional", time : "Monthly", },
            { id : 3, ext : "community-manager",  title : "Community & Event Manager", time : "Monthly", },
            { id : 4, ext : "task-manager",  title : "Task Manager", time : "Monthly",  },
            { id : 5, ext : "blogger",  title : "Blogger & Content Creator", time : "Monthly",  },
            { id : 6, ext : "graphic-designer",  title : "Graphic Designer", time : "Monthly",  },
            { id : 7, ext : "social-manager",  title : "Social Media Manager", time : "Monthly",  },
            { id : 8, ext : "china-community",  title : "China - Community Manager", time : "Monthly",  },
            { id : 9, ext : "chinese-translator",  title : "Chinese Translator", time : "Monthly",  },
            { id : 10, ext : "china-social",  title : "China - Social Media Manager", time : "Monthly",  },
            { id : 11, ext : "china-content",  title : "China - Content Manager", time : "Monthly",  },
            { id : 12, ext : "korea-community",  title : "Korea - Community Manager", time : "Monthly",  },
            { id : 13, ext : "korea-translator",  title : "Korean Translator", time : "Monthly",  },
            { id : 14, ext : "korea-social",  title : "Korea - Social Media Manager", time : "Monthly",  },
            { id : 15, ext : "korea-content",  title : "Korea - Content Manager", time : "Monthly",  },

        ]
    }
    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Contribute Today" desc="Fraktal makes it easy for everyone to contribute. You do not have to be a developer or highly skilled in a specific field. There are opportunties for everyone to help Fraktal grow and transform the world!" />

                        <Row>
                            {/* Featured Job Box */}
                            <TaskBox jobs={this.state.jobs} />


                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default Tasks;
