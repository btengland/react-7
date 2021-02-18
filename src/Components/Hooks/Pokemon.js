import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
            // console.log(res.data.results)
            setPokemon(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
    }, [props.id])
    return (
        <div>
            {pokemon.map((poke) => {
                <div>
                    {poke.name}
                </div>
            })}
        </div>
    )
}

export default Pokemon