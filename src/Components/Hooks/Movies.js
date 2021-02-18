import React, { useState } from 'react'

const Movies = (props) => {
    const [movies, setMovies] = useState([
        'Star Wars',
        'Harry Potter',
        'Lord of the Rings',
        'Die Hard'
    ])
    const [input, setInput] = useState('')
    return (
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => {
                    setMovies([...movies, input])
                    setInput('')
                }}>Add Movie</button>
            </div>
            {movies.map((movie) => {
                return (
                    <p>
                        {movie}
                    </p>
                )
            })}
        </div>
    )
}

export default Movies