import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Details() {
    const details = useSelector(store => store.genres);
    const history = useHistory();
    // console.log('what are my details:', details);
     
    return (
        <>
            <h2>Movie Details View</h2>

            {/* Since data is being fetched from the server asynchonously, there is
            a delay before the data is available in the Redux store therefore the 
            'details' array is coming back as undefined/empty as the rendering occurs
            at the same time. 
            So we need to use conditional rendering in order to display things on the DOM
            when the data is available in the Redux store. Here we used the '&&' operator
            to check if the 'details' array has something in it (not undefined), if it is 
            not undefinted then render. */}
            {details.length &&
                <>
                    {/* To display the movie poster, title & description only once, we access
                    those properties outside of .map(). Then we only want to get the properties from the first
                    index of the 'details' array using '[0]' because we know for sure that the [0] index will always 
                    have that information because if the movie has only one genre, we will only get one index which 
                    is the [0] index. If there are multiple genres to a movie, we will have multiple indexes. Whether
                    a movie has a single or multiple genres, there will always be a [0] index where we can get the movie
                    poster, title, and description. */}
                    <img src={details[0].poster}/>
                    <div>Title: {details[0].title}</div>
                    <br />
                    <div>Description: {details[0].description}</div>
                    <br />
                    <div>Genres:</div>
                    {details.map((detail) => (
                        // In the 'details' array, we loop through it to get each genre name and display it.
                        <div key={detail.id}>
                            {detail.name}
                        </div>
                    ))}
                </>
            }
            <br />
            {/* When the user clicks this button, it will take them back to the home page/movies list view. */}
            <button onClick={() => {
                history.push("/")
                }
            }>
            Back to Movie List
            </button>
        </>
    );

}


export default Details;