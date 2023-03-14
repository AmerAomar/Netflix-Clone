import { Card, Badge, Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "./ModalMovie";

function Movie(props) {
  const data = props.data;
  const imageUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={imageUrl} alt={data.title} />
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
          movieData={{ name: data.title, img: imageUrl }}
        />
      </Card.Body>
    </Card>
  );
}

export default Movie;
