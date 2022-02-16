import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalMovie from "./ModalMovie";
import { useState } from "react";

export default function Movie(props) {
  // console.log(props.data);

  const [showMovie, setShow] = useState(false);
  const [chosedMovie, setChosedMovie] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleShowModal(data) {
    console.log(data);
    handleShow();
    setChosedMovie(data);
  }
  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + props.data.poster_path}
          />

          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Button
              variant="primary"
              onClick={() => {
                handleShowModal(props.data);
              }}
            >
              Show Modal
            </Button>
          </Card.Body>
        </Card>
        {chosedMovie && (
          <ModalMovie
            show={showMovie}
            handleClose={handleClose}
            chosedMovie={chosedMovie}
          />
        )}
      </div>
    </>
  );
}
