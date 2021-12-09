const {AuthorsModel} = require( '../models/authorsModel.js' );


const AuthorsController ={
    allAuthors: function(request, response){
        AuthorsModel.findAll()
        .then(data => response.json(data))
        .catch(err => response.json(err));
    },


    seeAuthor: function(request, response){
        console.log("The mongoose id requested is: ", request.params);
        console.log("este es el request body: ",request.params._id)
        let id = request.params._id;
        console.log("id llega al controlador?", id);
        AuthorsModel.findAuthors(id)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },

    createAuthor: function(request, response){
        // console.log("The mongoose id requested is: ", request.params._id);
        console.log("llega el request: ",request.body)
        let authorName = request.body.authorName;
        // let updated_at=Date;
        // let created_at=Date;
        createdAuthors = {
            authorName
            // updated_at,
            // created_at
        };
        console.log("informacion que sera guardada: ",createdAuthors)
        AuthorsModel.save(createdAuthors)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },

    updateAuthors: function(request, response){
        let id = request.params._id;
        let authorName= request.body.authorName;
        updatedAuthors = {
            authorName
            // updated_at
        };
        console.log(id);
        AuthorsModel.findandUpdate(updatedAuthors, id)
        .then(data => response.json(data))
        .catch(err => response.json(err));

    },

    removeAuthors: function(request, response){
        // console.log("The mongoose id requested is: ", request.params._id);
        let id = request.params._id;
        AuthorsModel.delete(id)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },


}


module.exports = {
    AuthorsController
};