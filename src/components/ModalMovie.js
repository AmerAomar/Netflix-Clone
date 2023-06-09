import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalMovie(props) {
  const { show, handleClose, movieData } = props;
  const [comment, setComment] = useState("");

  const handleAddToFavorite = () => {
    fetch(`${process.env.REACT_APP_serverUrl}/moviesDB`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  title: movieData.name,
  // release_date: movieData.overview, // include release_date
  director: comment, 
  genre: movieData.img,// here i added the image to the database in the genre because im dumb       
}),

    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movieData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={movieData.img} alt={movieData.name} width="100%" />
        <h5>{movieData.overview}</h5>
        <p>Add a comment:</p>
        <textarea rows="1" value={comment} onChange={handleCommentChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToFavorite}>
          Add to Favorite
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
