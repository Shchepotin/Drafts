const http = require('http');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mongo:27017', { useNewUrlParser: true }, (error, client) => {
    if (error) {
        throw error;
    }

    const db = client.db('node_app');

    http.createServer((request, response) => {
        db.collection('users').find().toArray((error, result) => {
            response.write(JSON.stringify(result));
            response.end();
        });
    }).listen(80);
});
