import React, {Component} from 'react';


class JobCard extends Component {



    render() {

        const {job} = this.props;

        return (
            <article>
                <img src="" alt=""/>
                <div>
                    <h3>{job.title}</h3>


                </div>

            </article>
        );
    }
}

export default JobCard;