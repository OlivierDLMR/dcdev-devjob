import React, {Component} from 'react';
import {Route} from "react-router";
import {NavLink} from "react-router-dom";
import JobView from "./components/JobView";
import JobAdd from "./components/JobAdd";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {jobs: [], loading: true};
        this.state.test = "a";
    }



    componentDidMount() {
        fetch('https://127.0.0.1:8000/api/jobs/')
            .then(response => response.json())
            .then(data => this.setState({jobs: data["hydra:member"], loading: false})
            )
    }


  render() {
    return (
        <div>
            <nav>
                <ul className="nav nav-tabs" >
                    <li className="nav-item m-2"><NavLink to="/">Accueil</NavLink></li>
                    <li className="nav-item m-2"><NavLink to="/offres-emploi">Offres d'emploi</NavLink></li>
                    <li className="nav-item m-2"><NavLink to="/ajouter-offre">Ajouter une offre</NavLink></li>
                </ul> {/* NavLink créer un lien vers l'url to*/}
            </nav> {/* Route associe un chemin avec un composant apres le /  */}

            <Route path="/offres-emploi">
                <JobView jobs={this.state.jobs}  /> {/*JobView = le composant à afficher quand on est sur la route /offres emploi<*/}
            </Route>
            <Route path="/ajouter-offre">
                <JobAdd jobs={this.state.jobs}/>
            </Route>

        </div>





    );
  }
}

export default App;
