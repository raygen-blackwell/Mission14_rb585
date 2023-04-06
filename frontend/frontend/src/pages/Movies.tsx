import data from '../MovieData.json';
import { PageTitle } from './Layout';
// Movies.tsx has a table that displays the json movie data

const MD = data.MovieData;

function MovieList() {
  return (
    <>
      <PageTitle title="Movie List" />
      <header className="App-header">
        <div className="text-center">
          <h1>Movie Collection</h1>
        </div>
      </header>
      <div className="text-center">
        <table className="table">
          <thead className="bg-dark text-light">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {MD.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
