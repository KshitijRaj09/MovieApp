import React from 'react';
import './MovieList.css';

export default function MovieList({movies}) {
    const showMovieList = movies.map(({id, image, name, summary})=>(
        <div key={id} className="container">
            <img src={image.medium} alt={name}/>
            <div className="movie-name">{name}<i className="fas fa-heart"></i></div>
            <div className="overlay">
                <div className="movie-description">{summary}</div>
            </div>
        </div>
    ));

    return (
        <div className = 'showmovie'>
            {showMovieList}
        </div>   
    )
}
