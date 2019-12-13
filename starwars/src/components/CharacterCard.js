import React from 'react';
import { Card } from './styles'

const CharacterCard = props => {

    const { character } = props;
 
    return (
        <Card>
            <h2>{character.name}</h2>
        </Card>
    );
};

export default CharacterCard;
