const MoviesList = ({movie})=> {
      return (
            <div className="Movie_list">
                  <div className="Card">
                        <div>
                              <img className="poster" src={movie.Poster === 'N/A' ? 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg' : movie.Poster} alt="img"/>
                        </div>
                        <div className="movie_head">
                              {movie.Title}
                        </div>
                        <div className="movie_type">
                              Type: {movie.Type}
                        </div>
                        <div className="movie_year">
                              YEAR: {movie.Year}
                        </div>
                  </div>
            </div>
      );
}

export default MoviesList;