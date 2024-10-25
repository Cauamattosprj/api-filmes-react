import { useEffect, useState } from 'react';
import './App.css';
import otaviano from './search.svg';
import MovieCard from './MovieCard';

// OMBd api key: bd3357e4

const API_URL = 'https://www.omdbapi.com?apikey=bd3357e4'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log(movies);
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('spider')
        console.log(searchMovies.data)
    }, [])
    
    return (
        <>
        <div className='app'>
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder='Buscar filmes'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={otaviano}
                    alt="search" 
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => {
                            return <MovieCard movie={movie} />
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>Nenhum filme encontrado</h2>
                    </div>
                )
            }

            
        </div>
        </>
    )
}

export default App;