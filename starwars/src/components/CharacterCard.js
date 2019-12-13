import React from 'react';

const CharacterCard = props => {

    const { character } = props;
 
    return (
        <h2>{character.name}</h2>
    );
};

export default CharacterCard;
