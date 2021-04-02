import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

function MovieList({ movies, rate, searchTerm }) {
    const moviess = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            movie.rating >= rate
    );

    return (
        <div className="movieList">
            <div className="movieList">
                {moviess.map((element) => (
                    <MovieCard movie={element} testvalue="nothing" />
                ))}
            </div>
        </div>
    );
}

export default MovieList;
