// MesVoitures.js
import React, { Component } from 'react';
import Voiture from './Voiture';
import Header from './Header';
import './MesVoitures.css';

class MesVoitures extends Component {
    constructor(props) {
        super(props);

        this.state = {
            voitures: [
                { marque: 'Toyota', couleur: 'Rouge', annee: 2022, afficherAge: false },
                { marque: 'Ford', couleur: 'Gris', annee: 2020, afficherAge: false },
                { marque: 'Honda', couleur: 'Vert', annee: 2021, afficherAge: false },
            ],
        };
    }

    getAge = (annee) => {
        const anneeActuelle = new Date().getFullYear();
        return anneeActuelle - annee;
    };



   // Fonction pour basculer l'état et afficher ou masquer l'âge pour une voiture spécifique
toggleAfficherAge = (index) => {
    this.setState((prevState) => {
        // On utilise map pour créer un nouveau tableau de voitures avec le bon état mis à jour
        const voitures = prevState.voitures.map((voiture, i) => {
            if (i === index) {
                // Si l'index correspond à l'index de la voiture cliquée, mettre à jour l'état afficherAge
                return { ...voiture, afficherAge: !voiture.afficherAge };
            }
            // Si ce n'est pas la voiture cliquée, retourner la voiture inchangée
            return voiture;
        });
        // Retourner un nouveau tableau de voitures mis à jour
        return { voitures };
    });
};


    render() {
        return (
            <div className="MesVoitures">
                <Header />
                <table>
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Couleur</th>
                            <th>Âge</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.voitures.map((voiture, index) => (
                            <tr key={index}>
                                <td>{voiture.marque}</td>
                                <td>{voiture.couleur}</td>
                                 <td>
                                    {voiture.afficherAge ? this.getAge(voiture.annee) : ''}
                                </td>
                                <td>
                                    <button onClick={() => this.toggleAfficherAge(index)}>
                                        {voiture.afficherAge ? 'Masquer l\'âge' : 'Afficher l\'âge'}
                                    </button>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MesVoitures;
