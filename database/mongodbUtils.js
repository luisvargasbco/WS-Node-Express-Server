const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://petsUser:petsPassword@cluster0.wumjj.mongodb.net/PETS?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let pets;

function connect(callback) {
    client.connect((err) => {
        console.log('MongoDB succesfully connected');
        pets = client.db('PETS').collection('pets');
        return callback(err);
    });
}

function disconnect(callback) {{
    client.close();
    callback();
}}

function getsPetsCollection() {
    return pets;
}

module.exports = {
    connect,
    disconnect,
    getsPetsCollection,
};