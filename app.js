const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const porta=process.env.PORT||8080;






app.get('/products/:id/:page',async (req, res) => {
    const like=req.params.id;
    const page=req.params.page;

    request('https://apprestmoob.herokuapp.com/products/'+like+'/'+page, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  res.send("jsonCalback("+body+");");

}); 



   
});










app.listen(porta, () => console.log('Servidor na porta: '+porta));
