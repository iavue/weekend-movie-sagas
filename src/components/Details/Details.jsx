import { useSelector } from 'react-redux';
import React from 'react';

function Details() {
   
    const details = useSelector(store => store.genres);

    console.log('what are my details:', details);

    

    return (
        <>
        <h2>Movie Details View</h2>

        <img src={details[0].poster}/>
        <li>Title: {details[0].title}</li>
        <li>Description: {details[0].description}</li>

        {details.map((detail) => (
            <div key={detail.id}>
                {/* <li>Title: {detail.title}</li>
                <li>Description: {detail.description}</li> */}
                <li>Genre: {detail.name}</li>
            </div>
        ))}
        </>
    );
}


export default Details;