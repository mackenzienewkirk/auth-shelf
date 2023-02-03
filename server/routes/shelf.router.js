const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware')


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const currentUserID = req.user.id;

  const sqlQuery = `
  SELECT * FROM "item"
  WHERE "user_id"=$1
  ORDER BY "id";
  `

  const sqlValues = [currentUserID];

  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('GET things failed:', dbErr);
      res.sendStatus(500);
    })
     // For testing only, can be removed
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
  
    let idToUpdate = req.params.id;
    let description =  req.body.description;
    let urlUpdate = req.body.image_url;
    
    
    let sqlQuery =`
        UPDATE "item"
            SET "description" = $1, "image_url" = $2
            WHERE "id" = $3;
    `
    let sqlValues = [ description, urlUpdate, idToUpdate ]
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log('Serveside PUT', dbRes);
        res.sendStatus(201)
    }).catch(( dbErr)=>{
        console.log('broke PUT DB', dbErr);
        res.sendStatus(500)
    })
})


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


// router.get('/:id', rejectUnauthenticated, (req, res) => {
//   const currentUserID = req.user.id;

//   const sqlQuery = `
//   SELECT * FROM "item"
//   WHERE "user_id"=$1
//   ORDER BY "id";
//   `

//   const sqlValues = [currentUserID];

//   pool.query(sqlQuery, sqlValues)
//     .then((dbRes) => {
//       res.send(dbRes.rows);
//     })
//     .catch((dbErr) => {
//       console.log('GET things failed:', dbErr);
//       res.sendStatus(500);
//     })
//      // For testing only, can be removed
// });
// router.get('/:id', (req, res) => {
//   // endpoint functionality
// });

module.exports = router;
