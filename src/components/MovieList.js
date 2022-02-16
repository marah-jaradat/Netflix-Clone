import Movie from "./Movie";

export default function MoviesList(props) {
  console.log(props.movies);
  return (
    <>
      <h1>Movies List:</h1>
      {props.movies.map((object) => {
        return (
          <>
            <Movie data={object} />
          </>
        );
      })}
    </>
  );
}
