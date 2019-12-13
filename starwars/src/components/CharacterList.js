import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {

    const { characters } = props;

    return (
        <div className="character-list">
            {characters.map(c => (
                <CharacterCard key={c.created} character={c} />
            ))}
        </div>
    );
}

export default CharacterList;
