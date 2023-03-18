import { useState, useEffect } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import FavUpdate from "./FavUpdate";


function FavList() {
  const [favList, setFavList] = useState([]);
  const getFavorite = async () => {
    const URL = `${process.env.REACT_APP_serverUrl}/moviesDB`;
    const axiosResult = await axios.get(URL);
    const favList = axiosResult.data;
    setFavList(favList);
  };

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowUpdateModal(true);
  };

  const handleCloseModal = async () => {
    setShowUpdateModal(false);
    await getFavorite(); // re-fetch the data after updating
  };

  useEffect(() => {
    getFavorite();
  }, []);

  const handleDelete = async (id) => {
    const URL = `${process.env.REACT_APP_serverUrl}/DELETE/${id}`;
    await axios.delete(URL);
    await getFavorite(); // re-fetch the data after deleting
  };

  return (
    <Row style={{ marginTop: "20px"  }}>
      {favList.map((item) => (
        <Col md={4} key={item.id} >
          <Card style={{ width: "18rem", border: "3px solid gold", borderColor: "gold" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${item.genre}`}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>comment: {item.director}</Card.Text>
              <Button variant="success" onClick={() => handleShowModal(item)}>
                Update
              </Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <FavUpdate
        showUpdateModal={showUpdateModal}
        handleCloseModal={handleCloseModal}
        selectedMovie={selectedMovie}
      />
    </Row>
  );
}

export default FavList;
