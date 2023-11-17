const express = require('express')
const app = express()
const port = 3100
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
app.use(cors());
app.use(express.json());

// CONNECTION TO THE DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // no longer needed
    useUnifiedTopology: true, // no longer needed
  });

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the application on a MongoDB connection error
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});



app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Ai Tutor Backend!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})