const dotenv = require('dotenv');
dotenv.config()
const connectionString = process.env.MONGO_DB_CONNECTION;
const express = require ('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }))
// app.listen(4000, function() {
//   console.log('listening on 4000')
// })

// MongoClient.connect(connectionString, (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to database')
//   const db = client.db('conspire');
// })

MongoClient.connect(connectionString, {
  useUnifiedTopology: true})
    .then(client => {
      console.log('Connected to Database')
      const db = client.db('conspire')
      const tasksCollection = db.collection('tasks')

      app.use(bodyParser.urlencoded({ extended: true }))

      app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
      })

      app.post('/tasks', (req, res) => {
        tasksCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
      })

      app.listen(4000, function() {
        console.log('listening on 4000')
      })
    })
    .catch(console.error)