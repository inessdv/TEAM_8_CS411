const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


/*MOPNGODB CONNECTING*/
/*
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxMessageSizeBytes: 100000000 // 100 MB
  /*
  useCreateIndex: true,
/*
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));
*/

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.listen(27017, () => {
    console.log(`Server is running on port 27017.`);
  });

  