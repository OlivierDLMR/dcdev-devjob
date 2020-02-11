import React, {Component} from 'react';
import moment from "moment";
import 'moment/locale/fr'
import SkillLi from "./SkillLi";
import BtnAddToJob from "./BtnAddToJob";

class JobInfo extends Component {
    render() {
        const job = this.props.job;
        const skillsLi = job.skills.map((skill, key) =><li key={key}><SkillLi skill={skill} addToJob={j => this.props.addToJob(j)} job={job}/></li>); {/* dans le fichier skillli tu va me chercher les skills et tu les affiche*/}

        return (
            <div>
                <h2>{job.title}</h2>
                <p>{moment(job.createdAt).fromNow()}</p>
                <ul>
                    {skillsLi}
                </ul>

            </div>
        );
    }
}

export default JobInfo;