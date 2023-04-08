const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

router.get('/:id', (req, res) => {
    console.log('movieId is:', req.params.id);

    const query = `SELECT * FROM movies
    JOIN movies_genres ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movies.id = ${req.params.id}`;

    axios
    .get(query)
      .then( response => {
        res.send(response);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  
  });

  module.exports = router;