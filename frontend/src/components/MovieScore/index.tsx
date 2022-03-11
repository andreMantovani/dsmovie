import MovieStars from 'components/MovieStars';
import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie;
}

function MovieScore({ movie } : Props) {

  const score = movie.score;
  const count = movie.count;

  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;