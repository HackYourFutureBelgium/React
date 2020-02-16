import React, {useEffect, useState} from "react";

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    // This use effect might be confusing
    // But is is an example of another type of hook
    // For now it is unimportant to know how it works exactly
    // Just know that it executes the function once on first render
    useEffect(() => {
        const fetchPokemons = () => {
            return fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };

        /* Use the result of the fetchPokemons function */
        /* set the result using setPokemons, be sure to support the render below */
    }, []);

    return (
        <div className={'pokedex'}>
            <h2>Pokedex</h2>
            {
                pokemons.map(pokemon => <Pokemon key={pokemon.entry_number} {...pokemon} />)
            }
        </div>
    )
};

const Pokemon = ({ /* add the property we want to use in order to display the name */ }) => {
    return (
        <article>
            {/* Render the property here */}
        </article>
    )
};

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

const InteractivePokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(false);

    // This use effect might be confusing
    // But is is an example of another type of hook
    // For now it is unimportant to know how it works exactly
    // Just know that it executes the function once on first render
    useEffect(() => {
        const fetchPokemons = () => {
            return fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };

        /* Use the result of the fetchPokemons function */
        /* set the result using setPokemons, be sure to support the render below */
    }, []);

    const onSelectHandler = (pokemon) => {
        const fetchPokemon = () => {
            return fetch(pokemon.url)
                .then(response => response.json());
        };

        /* Use the result of the fetchPokemon function */
        /* set the result using selectedPokemon, be sure to support the render below */
    };

    return (
        <div className={'pokedex'}>
            <h2>Interactive Pokedex</h2>
            {
                selectedPokemon === false
                ? (
                    pokemons.map(pokemon => <InterActivePokemon key={pokemon.entry_number} {...pokemon} /* pass the onSelectHandler here a property */ />)
                )
                : (
                    <DetailedPokemon {...selectedPokemon} />
                )
            }
        </div>
    )

};

const DetailedPokemon = ({ flavor_text_entries }) => {
    return (
        <article>
            {flavor_text_entries.map((entry, index) => <p key={index}>{entry.flavor_text}</p>)}
        </article>
    );
};

const InterActivePokemon = ({ pokemon_species, onSelectHandler }) => {
    const onClick = () => {
        /* trigger the onSelectedHandler function with the pokemon_species */
    };

    return (
        <article>
            {/* Render the property here */}
            <button onClick={onClick}>Learn more</button>
        </article>
    )
};


export { Pokedex, InteractivePokedex };