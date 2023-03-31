var express = require('express')
const axios = require('axios');
var router = express.Router()

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://l9ve31psbl.execute-api.ap-southeast-1.amazonaws.com/apidev/restfunction?device_id=avc129',
  headers: { 
    'x-api-key': 'v8QwL4wpSS1m5QfdRqjwZW3y32sXS24RsBWx0Ya0'
  }
};


router.get('/', (req, res) => {
  axios.request(config)
    .then((response) => {
      const data = response.data;
      res.render('admin', { data }); // Render the 'admin' EJS view with the fetched data
    })
    .catch((error) => {
      console.log(error);
      res.send('Error fetching data');
    });
});

router.get('/admindata', (req, res) => {
  axios.request(config)
    .then((response) => {
      const data = response.data;
      res.json(data); // Send the response data as JSON to the client
    })
    .catch((error) => {
      console.log(error);
      res.send('Error fetching data');
    });
});

module.exports = router;
