import { useEffect, useState } from "react";
import { Col, Container, Image, ListGroup, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const fetchMovieDetail = () => {
    fetch("http://www.omdbapi.com/?apikey=dab26447&i=" + params.movieId)
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del dettaglio del film");
        }
      })
      .then((detail) => {
        console.log(detail);
        setMovie(detail);
        setLoading(false);
        console.log(movie);
      })
      .catch((err) => console.log(err));
  };

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg0ZjY3Yjc1YjczOTAwMTU3ZWFkM2MiLCJpYXQiOjE3MTk5ODk4ODMsImV4cCI6MTcyMTE5OTQ4M30.PoIMMTm_BFqVjWDvU9PWpAD8x6O_LZD5Nd6sg4-6flc",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del dettaglio del film");
        }
      })
      .then((review) => {
        setComments(review);
      });
  };

  useEffect(() => {
    fetchMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);

  if (loading) {
    return (
      <div data-bs-theme="dark" className="d-flex align-items-center bg-primary text-white vh-100">
        <Container className="text-center">
          <Spinner animation="border" />
          <p>Caricamento...</p>
        </Container>
      </div>
    );
  }

  return (
    <div data-bs-theme="dark" className=" bg-primary text-white ">
      <MyNavBar />
      <Container>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center align-items-center" xs={12}>
            <Image src={movie.Poster} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center" xs={12}>
            <ListGroup>
              <ListGroup.Item>{movie.Title}</ListGroup.Item>
              <ListGroup.Item>{movie.Genre}</ListGroup.Item>
              <ListGroup.Item>{movie.Released}</ListGroup.Item>
              <ListGroup.Item>{movie.Runtime}</ListGroup.Item>
              <ListGroup.Item>{movie.imdbRating}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetails;
