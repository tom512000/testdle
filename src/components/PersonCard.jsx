import React from "react";
import PropTypes from "prop-types";

export default function PersonCard({ person, target }) {
    // Fonction pour déterminer la couleur en fonction des critères
    function getColor(field, value) {
        if (field === "age") {
            const diff = Math.abs(value - target.age);
            if (value === target.age) return "green";
            if (diff <= 3) return "yellow";
            return "red";
        }
        return value === target[field] ? "green" : "red";
    }

    return (
        <div
            style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
            }}
        >
            <p style={{ color: getColor("nom", person.nom) }}>
                Nom: {person.nom}
            </p>
            <p style={{ color: getColor("prenom", person.prenom) }}>
                Prénom: {person.prenom}
            </p>
            <p style={{ color: getColor("age", person.age) }}>
                Âge: {person.age}
            </p>
            <p style={{ color: getColor("statut", person.statut) }}>
                Statut: {person.statut}
            </p>
        </div>
    );
}

PersonCard.propTypes = {
    person: PropTypes.shape({
        nom: PropTypes.string,
        prenom: PropTypes.string,
        age: PropTypes.string,
        statut: PropTypes.string,
    }).isRequired,
    target: PropTypes.string.isRequired,
};
