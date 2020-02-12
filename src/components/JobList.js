import React, {Component} from 'react';
import JobCard from "./JobCard";
import SkillLi from "./SkillLi";



class JobList extends Component {


    constructor(props) {
        super(props);
        this.state = { jobSelect: {}, loading: true};
    }



    addToJob = function(j) {

        fetch('https://127.0.0.1:8000/api/jobs/'+j.id)
            .then(response => response.json())
            .then(data => this.setState({jobSelect: data, jobSkill: data.skills.map((skill, key) =><li key={key}><SkillLi skill={skill}/></li>)}));


    }.bind(this)

    render() {

        const jobLi = this.props.jobs.map((job, key) => <li key={key}><JobCard job={job} addToJob={this.addToJob}  /></li>);{/*converti une liste de job qui sont des objet js convertie en jsx*/}

        return (
           <div className="container">
               <div>
                   <ul className="row p-3">
                    {jobLi}
                   </ul>
               </div>
               <div className="col-md-4">
                   {this.state.jobSelect.title}
                    {this.state.jobSelect.company}
                   <ul className="btn btn-danger m-3">{this.state.jobSkill}</ul>
                    {this.state.jobSelect.description}
               </div>
           </div>




        );
    }
}

export default JobList;