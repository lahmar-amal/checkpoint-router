import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
function MovieCard({ movie }) {
    return (
        <Card style={{ width: "18rem", height: "45rem" }}>
            <Card.Img variant="top" src={movie.posterUrl} className="img" />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <div>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={movie.rating}
                    />
                </div>
                <div className="but">
                    <Button
                        variant="primary"
                        onClick={(e) => e.preventDefault()}
                    >
                        <Link
                            to={`/Movie/${movie.title}`}
                            style={{ color: "white" }}
                        >
                            View Movie
                        </Link>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
