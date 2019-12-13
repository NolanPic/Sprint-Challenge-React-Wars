import React from 'react';
import CharacterCard from './CharacterCard';
import { CardList } from './styles';

const CharacterList = props => {

    const { characters } = props;

    return (
        <CardList>
            {characters.map(c => (
                <CharacterCard key={c.created} character={c} />
            ))}
        </CardList>
    );
}

export default CharacterList;
