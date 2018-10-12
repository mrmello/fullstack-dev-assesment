const axios = require('axios');
setTimeout(function(){
  axios.get('http://server:3000/campaigns')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error);
  });
}, 7000)
