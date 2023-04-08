import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'
import Details from '../Details/Details';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    
    // const handleOnClick = ({key}) => {
    //     //event.preventDefault();
    //     console.log('Inside handleOnClick() after clicking on movie poster!');
    //     dispatch({ type: 'SEND_ID_TO_SERVER', payload: key });
    //     console.log('what is inside payload:', key);
    //     history.push("/details");
    // }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={()=>{
                                dispatch({ type: 'SEND_ID_TO_SERVER', payload: movie.id })
                                history.push("/details")
                            }}
                            src={movie.poster} 
                            alt={movie.title}/>
                        </div>
                    );
                    // <Details movieId={movie.id}/>
                })}
            </section>
        </main>

    );
}

export default MovieList;