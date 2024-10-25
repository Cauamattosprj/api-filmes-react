import React from 'react';

const MovieCard = ({ movie }) => {
    return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
            alt={movie.Title} />
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            <a href="magnet:?xt=urn:btih:V6RG62UXSA3BIUCVQCO5AFXSL4OFK4NE&dn=Homem-Aranha%20-%20Sem%20Volta%20para%20Casa%20EXTENDED%202022%20WEB-DL%201080p%20DUAL%205.1&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce">
                Baixar torrent
            </a>
        </div>
    </div>
    )
}

export default MovieCard;