import React from "react";
import { Button, Modal, Form } from "react-bootstrap/";
import Card from "react-bootstrap/Card";

// import { useRef } from "react";

function ModalMovie(props) {
  //   const comtRef = useRef();
  //   function handleCaption(obj) {
  //     obj.preventDefault();
  //     const userCaption = comtRef.current.value;
  //     const newData = { ...props.meme, userCaption };
  //     props.updateCaption(newData, props.meme.id);
  //   }

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.ModalMovieHandleColse();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.chosedMovie.title}</Modal.Title>
        </Modal.Header>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${props.chosedMovie.poster_path}`}
        />

        <Modal.Footer>
          <form>
            <Form.Group className="mb-3" controlId="formOfEmail">
              <Form.Label>Comment:</Form.Label>
              <Form.Control type="text" placeholder="Add Comment" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {/* onClick={handleCaption} */}
              Submit Comment
            </Button>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
