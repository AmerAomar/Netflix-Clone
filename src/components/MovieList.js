import Movie from './Movie';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList(props) {
  const data = props.data;

  const movieItems = data.map((item) => (
    <Col xs={12} md={4} key={item.id}>
      <Movie data={item} />
    </Col>
  ));

  return (
    <Row>
      {movieItems}
    </Row>
  );
}

export default MovieList;
