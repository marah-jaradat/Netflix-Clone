import Movie from "./Movie";
import { Card, Button } from "react-bootstrap/";
import ModalMovie from "./ModalMovie";
import { useState } from "react";

export default function MoviesList(props) {
  const [show, setShow] = useState(false);
  const [chosedMovie, setChosenMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleShowModal(movieData) {
    console.log(movieData);
    handleShow();
    setChosenMovie(movieData);
  }
  return (
    <>
      <h1>Movies List:</h1>
      {props.movies.map((object) => {
        return (
          <Card key={object.id}>
            <Card style={{ width: "18rem" }} key={object.id}>
              <Card.Img variant="top" src={object.image} />
              <Card.Body>
                <Card.Title>{object.title}</Card.Title>
                <Card.Text>
                  {object.comment ? object.comment : "No Comment is Added"}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShowModal(object);
                  }}
                >
                  Show Modal
                </Button>
              </Card.Body>
            </Card>
            {chosedMovie && (
              <ModalMovie
                show={show}
                handleClose={handleClose}
                chosedMovie={chosedMovie}
                updateMovies={props.updateMovies}
              />
            )}
          </Card>
        );
      })}
    </>
  );
}
