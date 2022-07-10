import { useEffect } from "react";
import { useState } from "react";
import MoviesList from "./MoviesList";
const Search = ({url})=> {
      const [search , setsearch] = useState('shinchan');
      const [data_movie , setdata_movie] = useState([]); 
      const handle_change = (e)=>{
            setsearch(e.target.value);
      }
      const search_movies = async (movie) =>{
            const response = await fetch(`${url}&s=${movie}`);
            const data = await response.json();
            setdata_movie(data.Search);
            //console.log(data);
      }
      const handle_click = ()=>{
            search_movies(search);
      }
      useEffect(()=>{
            search_movies("shinchan");
      },[]);
      return (
            <div>
                  <div className="Search">
                        <input type={'text'} value={search} className="search_bar" onChange={handle_change}  name="movie_search">
                        </input>
                        <button type="submit" className="search" onClick={handle_click}> Search </button>
                  </div>
                  <div>
                        {
                              console.log(data_movie)
                        }
                  </div>
                  {
                        data_movie?.length > 0 ? 
                        (     <div className="container">
                                    {
                                          data_movie.map((movie) =>(
                                                <MoviesList movie={movie}/>
                                          ))
                                    }
                              </div>
                        )
                        : 
                        (<div className="error_msg">OOPs we didn't find anything!!! sorry for the convenience</div>) 
                  }
            </div>
      );
}
export default Search;