import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';

function FavUpdate(props) {
  const handleCloseModal = () => {
    props.handleCloseModal();
  };

  const updateMovie = async (e) => {
    e.preventDefault();
    const obj = {
      title: e.target.title.value,
      director: e.target.comment.value,
      genre: e.target.poster.value,
    };
    
    console.log(props.selectedMovie.id);
    const serverURl = `${process.env.REACT_APP_serverUrl}/UPDATE/${props.selectedMovie.id}`;
    const axiosRes = await axios.put(serverURl, obj);
    console.log(axiosRes.data);
  
    // update favList with updated information
    const updatedList = props.favList.map((movie) => {
      if (movie.id === props.selectedMovie.id) {
        return { ...movie, ...obj };
      } else {
        return movie;
      }
    });
    props.setFavList(updatedList);
  
    handleCloseModal(); // close the modal
  };
  
  return (
    <>
      <Modal show={props.showUpdateModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Update the Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateMovie}>
            <Form.Group className="mb-3">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                name="poster"
                defaultValue={props.selectedMovie.genre}
              />
              <Form.Text className="text-muted">
                change the poster.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                defaultValue={props.selectedMovie.title}
              />
              <Form.Text className="text-muted">
                change or add the Movie title if not exist.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Add your Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="comment"
                defaultValue={props.selectedMovie.director}
              />
              <Form.Text className="text-muted">
                Add some comments or update it
              </Form.Text>
            </Form.Group>

            <Button variant="success" type="submit">
              Update!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FavUpdate;
