import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieList from "./Components/MovieList/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/NavBar/NavBar";
import ModalAdd from "./Components/MovieAdd/Modal";
import Movie from "./Components/Movie/Movie";
import { useState } from "react";
function App() {
    let films = [
        {
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            rating: 5,
            video: "https://www.youtube.com/embed/h2YKckrS30U",
        },
        {
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            rating: 4,
            video: "https://www.youtube.com/embed/6hB3S9bIaco",
        },

        {
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rating: 4,
            video: "https://www.youtube.com/embed/EXeTwQWrcwY",
        },
        {
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            rating: 2,
            video: "https://www.youtube.com/embed/_13J_9B5jEk",
        },
        {
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rating: 3,
            video: "https://www.youtube.com/embed/gG22XNhtnoY",
        },
        {
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
            rating: 5,
            video: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        },
    ];
    const [movies, setMovies] = useState(films);
    const [searchTerm, setSearchTerm] = useState("");
    const [rate, setRate] = useState(0);
    return (
        <BrowserRouter>
            <div className="App">
                <MyNavbar setSearchTerm={setSearchTerm} setRate={setRate} />

                <Route
                    path="/movieList"
                    render={() => (
                        <ModalAdd setMovies={setMovies} movies={movies} />
                    )}
                />
                <Switch>
                    <Route
                        path="/movieList"
                        render={() => (
                            <MovieList
                                movies={movies}
                                searchTerm={searchTerm}
                                films={films}
                                rate={rate}
                            />
                        )}
                    />

                    <Route
                        path="/movie/:movieTitle"
                        render={() => <Movie movies={movies} />}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
