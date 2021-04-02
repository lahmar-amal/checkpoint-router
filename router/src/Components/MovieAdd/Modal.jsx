import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
function ModalAdd({ setMovies, movies }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rating, setRating] = useState(0);
    let newMovie = {
        title: title,
        description: description,
        posterUrl: posterUrl,
        rating: rating,
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>Now you can add your favorite movie</Modal.Body>
                <Form.Control
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="PosterUrl"
                    value={posterUrl}
                    onChange={(e) => setPosterUrl(e.target.value)}
                />
                <br />
                <Form.Control
                    type="text"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => setMovies([...movies, newMovie])}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdd;
