const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

router.get('/:id', (req, res) => {
  console.log('What is req.params.id:', req.params.id);
  // Add query to get all genres

  const query = `SELECT * FROM movies
    JOIN movies_genres ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movies.id = ${req.params.id}`;

    pool.query(query)
      .then( result => {
        res.send(result.rows);
        console.log('What is response:', result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
});

module.exports = router;