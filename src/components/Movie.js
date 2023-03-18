import { Card, Badge, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "./ModalMovie";
import './Cards.css';


function Movie(props) {
  const data = props.data;
  const imageUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="d-flex justify-content-center mt-4 mb-4">
      <Card
        className="mb-4"
        style={{ width: "250px", border: "3px solid gold", borderColor: "gold" }}
      >
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={data.title}
          style={{ maxWidth: "100%" }}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.overview}</Card.Text>
          <Badge bg="secondary">{data.release_date}</Badge>
          <Button variant="primary" onClick={handleShowModal} className="mt-3">
            Add to Favorites
          </Button>
          <ModalMovie
            show={showModal}
            handleClose={handleCloseModal}
            movieData={{
              name: data.title,
              img: imageUrl,
              overview: data.overview,
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;
