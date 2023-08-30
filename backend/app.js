const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'pgAdmin',
  user: 'postgres',
  password: '123',
});

client.connect()

app.use(bodyParser.json());
app.use(cors());


app.post('/api/login', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Handle the data on the server as needed
  console.log('Email:', receivedData.email);
  console.log('Password:', receivedData.password);

  // Send a response back to the client
  res.status(200).json({ message: 'Data received on the server', data: receivedData });

  //DATABASE INTERACTION STARTS HERE
});

app.post('/api/register', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Handle the data on the server as needed
  console.log('Full Name:', receivedData.fullname);
  console.log('Sutdent Email:', receivedData.email);
  console.log('Password:', receivedData.password);

  // Send a response back to the client
  res.status(200).json({ message: 'Data received on the server', data: receivedData });

  //DATABASE INTERACTION STARTS HERE
  insertDetailsSQL = "INSERT INTO ALUMNI_SPACE_UI(fullname,email,password) " + " VALUES ($1,$2,$3)";

  // Query insert into Alumni_Space_Account
  client.query(insertDetailsSQL,[receivedData.fullname, receivedData.email, receivedData.password ],function (err, result) {
    if (err) {
      console.error(err);
      res.send("An error occurred during registration.");
    } else {
      console.log('Registration successful!:');

    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

