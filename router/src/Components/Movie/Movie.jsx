import React from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
function Movie({ movies }) {
    const { movieTitle } = useParams();
    const movie = movies.find((movie) => movie.title == movieTitle);

    return (
        <div className="mov">
            <div className="title">
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
                </style>
                <h1 style={{ color: "#7868e6", paddingBottom: "40px" }}>
                    {" "}
                    {movie.title}
                </h1>

                <h5 style={{ color: "#536162" }}>{movie.description}</h5>
            </div>
            <div className="vid">
                <iframe
                    width="600"
                    height="350"
                    src={movie.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Movie;
