import { Card, Button } from "react-bootstrap/";
import { useEffect, useState } from "react";

function FavList(props) {
  const [favListData, setFavListData] = useState();

  async function getDataFromDB() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/addFavmovie`);
    const data = await response.json();
    setFavListData(data);
  }
  useEffect(() => {
    getDataFromDB();
  }, []);

  async function handleDelete(id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/deleteFavMovie/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      getDataFromDB();
      alert("Recipe Deleted Successfully");
    }
  }
  return (
    <>
      <h1>This is my favorite list of Movies</h1>
      {props.favListData &&
        props.favListData.map((movie) => {
          return (
            <>
              <Card key={movie.id}>
                <Card.img src={movie.image} />
                <Button
                  onClick={() => {
                    handleDelete(movie.id);
                  }}
                >
                  Delete
                </Button>
              </Card>
            </>
          );
        })}
    </>
  );
}

export default FavList;
