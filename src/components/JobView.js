import React, {Component} from 'react';
import JobList from "./JobList";


class JobView extends Component {



    constructor(props) {
        super(props);
        this.state = {jobSelect:null};
    }
    render() {
        return (
            <aside>
                <h2>Offres d'emploi</h2>

                <JobList jobs={this.props.jobs} />{/* je transfert la liste des jobs de JobView vers JobList*/}

                <div>{this.state.jobSelect}</div>

            </aside>
        );
    }
}

export default JobView;