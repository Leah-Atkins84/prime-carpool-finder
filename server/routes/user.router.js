const express = require('express');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => { // Send back user object from the session (previously queried from the database)
    res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register',  (req, res, next) => {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
    pool.query(queryText, [username, password]).then(() => res.sendStatus(201)).catch((err) => {
        console.log('User registration failed: ', err);
        res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

// to update the user information
router.put('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `UPDATE "user"
      SET "fullName"= $1, "city"= $2, "region" = $3, "graduation_date" = $4, "needs_ride" = $5, "provide_ride" = $6
      WHERE id = $7;`;

    const queryValues = [
        req.body.fullName,
        req.body.city,
        req.body.region,
        req.body.graduation_date,
        req.body.needs_ride,
        req.body.provide_ride,
        req.params.id
    ];

    pool.query(queryText, queryValues).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('Error updating item', error);
        res.sendStatus(500);
    })
});// end put router

// clear all server session information about this user
router.post('/logout', (req, res) => { // Use passport's built-in method to log out the user
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
