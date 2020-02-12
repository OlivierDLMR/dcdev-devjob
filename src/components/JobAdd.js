import React, {Component} from 'react';
import "./JobAdd.css";




class JobAdd extends Component {

    state = {
        titre: null,
        entreprise: null,
        competences: [],
        url: null,
        desription: null
    };

    change = e => {  {/* le change sert à afficher dans les inputs lees données que l'utilisateur tape, comme le handleChange dans ecommerce. Le if sert à récupérer les données si il y a plusieurs skills  */}
        if(e.target.id === "competences")
        {
            this.state.competences = [].filter.call(e.target.options, o => o.selected).map(o=> o.value);
        }else {
            this.setState( {
                [e.target.id]: e.target.value
            });
        }
        console.log(this.state)
    };

    submit = e => {  {/* le submit correspond au handleSubmit du ecommerce, / le preventDefault empeche le rechargement automatique/ le fetch envoi à la bdd les data du formulaire */}
        e.preventDefault();
        console.log(this.state.competences);


        fetch( 'https://127.0.0.1:8000/api/jobs', {method:"POST", headers: {'Content-Type':'application/json'}, body:JSON.stringify( {
                "title": this.state.titre,
                "compagny": this.state.entreprise,
                "skills": this.state.competences,
                "url": this.state.url,
                "description": this.state.desription,
            })
        })

        console.log(this.submit);
    }




    render() {

        const skills = this.props.skills.map(skill => <option value={"/api/skills/"+ skill.id} key={skill.id}>{skill.name}</option> );
        console.log(this.props.skills);

        return (
            <div className="container">
                <form onSubmit={this.submit}>
                    <div className="group">
                        <input type="text" id="titre" onChange={this.change}/> {/*  onChange change les données de l'affichage dans l'input */}
                        <label htmlFor="titre">Titre</label>
                    </div>
                    <div className="group">
                        <input type="text" id="entreprise" onChange={this.change}/>
                        <label htmlFor="entreprise">Entreprise</label>
                    </div>
                    <div className="form-group">
                        <select multiple={true} className="form-control" id="competences" onChange={this.change}>
                            {skills}
                        </select>
                        <label htmlFor="competences">Compétences</label>
                    </div>

                    <div className="group">
                        <input type="text" id="url" onChange={this.change}/>
                        <label htmlFor="url">URL</label>
                    </div>
                    <div className="group">
                        <input type="textaera" id="description" onChange={this.change}/>
                        <label htmlFor="description">Description</label>
                    </div>
                    <button type="button" className="button buttonBlue">Ajouter</button>
                </form>
            </div>
        );

    }
}

export default JobAdd;