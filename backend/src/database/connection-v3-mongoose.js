import mongoose from 'mongoose';
import values from '../const/const.js';

const uriMongoLocal = "mongodb://127.0.0.1:27017"

mongoose.connect( uriMongoLocal, {
}).catch( error => 
   
    console.log(error) );

const connection = mongoose.connection;

connection.once( 'open', () => {
    console.log('Mongo Db conectado!');
});