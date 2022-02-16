import React from "react";
import { Button, Modal, Form } from "react-bootstrap/";
import Card from "react-bootstrap/Card";

import { useRef } from "react";

function ModalMovie(props) {
  const comtRef = useRef();
  function handleCaption(obj) {
    obj.preventDefault();
    const userCaption = comtRef.current.value;
    const newData = { ...props.meme, userCaption };
    props.updateCaption(newData, props.meme.id);
  }

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.handleColse();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.closedMovie.title}</Modal.Title>
        </Modal.Header>
        <Card.Img
          variant="top"
          src={
            "https://image.tmdb.org/t/p/w500" +
            `${props.closedMovie.poster_path}`
          }
        />
        <Modal.Body>
          <img width="100%" src={props.meme.image} alt={props.meme.name} />
          <p>{props.meme.topText}</p>
          <p>{props.meme.caption}</p>
        </Modal.Body>

        <Modal.Footer>
          <Form.Group className="mb-3" controlId="formOfEmail">
            <Form.Label>Comment:</Form.Label>
            <Form.Control type="text" placeholder="Add Comment" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleCaption}>
            Submit
          </Button>
          <Button variant="secondary" onClick={props.handleColse}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleColse}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
