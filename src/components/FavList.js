import Button from "ract-bootstrap/Button";
import Card from "ract-bootstrap/Card";

function FavList(props) {
  async function handleDelete() {
    const[]
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/deleteFavMovie/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 204) {
      alert("hello delete");
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
                <card img src={movie.image} />
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
