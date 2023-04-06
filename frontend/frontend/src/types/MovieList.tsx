import { useEffect, useState } from 'react';
import { Movies } from '../movies/movies';
import { PageTitle } from '../pages/Layout';

function MovieList() {
  const [movieData, setMovieData] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

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
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieID}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.diector}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
