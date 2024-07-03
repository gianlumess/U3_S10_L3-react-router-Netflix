import { Component } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class Galleria extends Component {
  state = {
    arrayFilms: [],
    isLoading: false,
  };

  filmsFetch = () => {
    //setto lo stato di caricamento a true prima che parta la fetch
    this.setState({ isLoading: true });

    fetch("http://www.omdbapi.com/?apikey=dab26447&s=" + this.props.saga)
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei film");
        }
      })
      .then((films) => {
        console.log(films);
        this.setState({ arrayFilms: films.Search });
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.filmsFetch();
  }
  render() {
    return (
      <section className="my-3 d-flex flex-column">
        <h2 className="mb-4 d-inline-block">{this.props.saga + " Saga:"}</h2>
        {this.state.isLoading && <Spinner animation="border" role="status" variant="currentColor"></Spinner>}
        <Row className="gx-2 gy-2">
          {this.state.arrayFilms.map((film) => (
            <Col xs={12} sm={6} md={4} lg={3} xxl={2} key={film.imdbID}>
              <Link to={"/movie-detail/" + film.imdbID}>
                <Image className="img-fluid w-100 poster-film" src={film.Poster} />
              </Link>
            </Col>
          ))}
        </Row>
      </section>
    );
  }
}

export default Galleria;
