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
        const skillsLi = job.skills.map((skill, key) =><li className="btn btn-danger m-1" key={key}><SkillLi skill={skill}/></li>);




        return (
            <article>
                <img src="" alt=""/>
                <div>
                    <h3>{job.title}</h3>

                    <ul className="row p-3">
                        <div className="btn btn-success m-1">{job.company}</div>
                        {skillsLi}
                    </ul>
                    <p>Offre ajoutée  {moment(job.createdAt).fromNow()}</p>

                    <BtnAddToJob
                        addToJob={j => { this.props.addToJob(j)}}
                        job={job}
                    >Voir l'offre

                    </BtnAddToJob>


                </div>

            </article>




        );
    }
}

export default JobCard;