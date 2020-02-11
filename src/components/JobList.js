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
            .then(data => this.setState({jobSelect: data}));


    }.bind(this)

    render() {

        const jobLi = this.props.jobs.map((job, key) => <li key={key}><JobCard job={job} addToJob={this.addToJob}  /></li>);{/*converti une liste de job qui sont des objet js convertie en jsx*/}

        return (
           <div className="container">
               <div className="jobCard-container">
                   <ul>
                    {jobLi}
                   </ul>
               </div>
               <div className="jobList-container">
                   {this.state.jobSelect.title}
                    {this.state.jobSelect.company}

                    {this.state.jobSelect.description}
               </div>
           </div>




        );
    }
}

export default JobList;