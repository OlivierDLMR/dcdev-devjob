import React, {Component} from 'react';
import moment from "moment";
import "moment/locale/fr";
import SkillLi from "./SkillLi";
import BtnAddToJob from "./BtnAddToJob";

class JobCard extends Component {

    constructor(props) {
        super(props);
        this.state = {jobSelect: {}, loading: true};

    }



    render() {

        console.log(this.props)
        const {job} = this.props;
        const skillsLi = job.skills.map((skill, key) =><li key={key}><SkillLi skill={skill}/></li>);




        return (
           <article>
                <img src="" alt=""/>
                <div>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                    <ul>
                        {skillsLi}
                    </ul>
                    <p>Offre ajoutée  {moment(job.createdAt).fromNow()}</p>

                    <BtnAddToJob
                        addToJob={j => { this.props.addToJob(j)}}
                        job={job}
                    >
xxxxxxx
                    </BtnAddToJob>


                </div>

            </article>




        );
    }
}

export default JobCard;