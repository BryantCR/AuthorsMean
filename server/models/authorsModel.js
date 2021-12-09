const mongoose = require( 'mongoose' );
const authorsSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
        
    },
    
},{
            timestamps:true
     
    
});

const Authors = mongoose.model('authors', authorsSchema);

const AuthorsModel = {
    save: function(createdAuthors){
        return Authors.create(createdAuthors);
    },
    findAll: function(){
        return Authors.find();
    },
    findAuthors: function(id){
        console.log("lo que busca la funcion "+Authors.findById(id));
        return Authors.findById(id);
    },
    findandUpdate: function(updatedAuthors, id){
        // console.log("break the object: "+updateMongoose.mName+" "+updateMongoose.age);
        return Authors.findByIdAndUpdate({_id:id}, {$set: {authorName: updatedAuthors.authorName}});
    },

    delete: function(id){
        return Authors.findOneAndRemove({_id:id});
    }

}


module.exports = {
    AuthorsModel
};