// Voiture.js
import React from 'react';

const Voiture = ({ marque, couleur , annee}) => {

    const maCouleur = couleur == '' ? <td>Neant</td> : <td>{couleur}</td>
    return (
        <tr>
            <td>{marque}</td>
            {/* <td>{couleur || "Neant" }</td> */}
            {/* <td>{couleur == '' ? "Neant" : couleur }</td> */}
            {maCouleur}
            <td>{annee}</td>
        </tr>
    );
};

export default Voiture;