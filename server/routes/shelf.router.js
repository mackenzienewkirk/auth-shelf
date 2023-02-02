const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
   console.log(req.user)
  console.log('adding a new item to the shelf:', req.body);
  const newItem = req.body;
  const newDescription = req.body.description;
  const newUrl = newItem.url;
  const user_id = req.user.id
  const sqlQuery = `
    INSERT INTO item (description, image_url, user_id)
	    VALUES
	    ($1, $2, $3);
  `;
  const sqlValues = [newDescription, newUrl, user_id];
  pool.query(sqlQuery, sqlValues)
  .then((response) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log('error in /api/shelf POST', error);
    res.sendStatus(500);
  })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
