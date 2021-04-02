import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import "./NavBar.css";
function MyNavbar({ setSearchTerm, setRate, rate }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/" className="nav">
                    Home
                </Link>
                <Link to="/movieList" className="nav">
                    Movies
                </Link>

                <Link to="/tvshows" className="nav">
                    Tv-Shows
                </Link>
            </Nav>
            <Form inline>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rate}
                    emptyStarColor={"#ffffff"}
                    onStarClick={(nextValue, prevValue) =>
                        setRate(nextValue, prevValue)
                    }
                />
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default MyNavbar;
