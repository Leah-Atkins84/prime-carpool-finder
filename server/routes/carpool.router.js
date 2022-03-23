const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route carpool
 */
 router.get('/', (req, res) => {
  console.log('carpool router, are you here?');
  if (req.isAuthenticated()) {
      console.log('/carpool GET route');
      console.log('is authenticated', req.isAuthenticated());
      console.log('user', req.user);
      const queryText = `SELECT "id", "username", "password",  "fullName", "city", "region", TO_CHAR("graduation_date", 'MM-DD-YYYY') AS "date", "needs_ride", "provide_ride"
      FROM "user";`;
      pool.query(queryText).then((result) => {
          res.send(result.rows);
      }).catch((error) => {
          console.log(error);
          res.sendStatus(500);
      })
  } else {
      res.sendStatus(403);
  }
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;
