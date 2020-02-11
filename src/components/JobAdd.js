import React, {Component} from 'react';
import "./JobAdd.css";



class JobAdd extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="group">
                        <input type="text"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="">Titre</label>
                    </div>
                    <div className="group">
                        <input type="text"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="">Entreprise</label>
                    </div>
                    <div className="group">
                        <input type="text"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="">Compétence</label>
                    </div>
                    <div className="group">
                        <input type="text"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label htmlFor="">URL</label>
                    </div>
                    <div className="group">

                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <textarea name="" id="" cols="40" rows="10"></textarea>
                        <label htmlFor="">Description</label>
                    </div>
                    <button type="button" className="button buttonBlue">Ajouter</button>
                </form>
            </div>
        );

    }
}

export default JobAdd;