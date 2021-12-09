const express = require( 'express');
const AuthorsRouter = express.Router();
const {AuthorsController} = require( '../controllers/authorsController' );

AuthorsRouter

    .get ('/authors', AuthorsController.allAuthors)

    .get ('/authors/:_id', AuthorsController.seeAuthor)

    .post('/authors', AuthorsController.createAuthor)

    .put('/authors/:_id', AuthorsController.updateAuthors)

    .delete ('/authors/:_id', AuthorsController.removeAuthors)



    module.exports = {
        AuthorsRouter
    };
    