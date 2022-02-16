import React from "react";
import { Card, Button, Modal, Form } from "react-bootstrap/";
import { useRef } from "react";

function ModalMovie(props) {
  const comtRef = useRef();
  function handleCaption(e) {
    e.preventDefault();
    const comment = comtRef.current.value;
    const newMovie = { ...props.chosedMovie, comment };
    props.updateCaption(newMovie, props.chosedMovie.id);
  }

  async function handleAddFav(movie) {
    // let values = [movie.title,movie.release_date, movie.poster_path, movie.overview,movie.comment];

    const dataToBeSent = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
    };
    const url = `${process.env.REACT_APP_SERVER}/addFavMovie`;
    const response = await fetch(url, {
      method: "POST",
      // comment: movie.
      body: JSON.stringify(dataToBeSent),
    });
    const data = await response.json();
    console.log(response.status);
    console.log(data);
  }

  // async function handleAddFav(movie) {
  //   const dataToBeSent = {
  //     title: movie.title,
  //     // as in database
  //   };
  //   const url = `${process.env.REACT_APP_SERVER}/addFavMovie`;
  //   const response = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(dataToBeSent),
  //   });
  //   const data = await response.json();
  //   console.log(response.status);
  //   console.log(data);
  // }
  return (
    <>
      <Modal show={props.show} onHide={props.ModalMovieHandleColse}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosedMovie.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            width="100%"
            src={`https://image.tmdb.org/t/p/w500/${props.chosedMovie.poster_path}`}
            alt={props.chosedMovie.title}
          />
          <p>{props.chosedMovie.instructions.substring(0, 50)} </p> ...
          <p>
            User Comment:{" "}
            {props.chosedMovie.comment
              ? props.chosedMovie.comment
              : "No Comment is added"}
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                ref={comtRef}
                type="text"
                placeholder="Enter your comment"
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleCaption}>
              Submit
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handleAddFav(e, props.chosedMovie);
              }}
            >
              Add to Favorites
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${props.chosedMovie.poster_path}`}
        /> */}
    </>
  );
}

export default ModalMovie;
