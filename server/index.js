const express = require('express')
const port = 3001
const app = express()
const bodyParser = require('body-parser')
const fetch = require("node-fetch");
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.post('/',(req,res)=>{
  let search = req.body.query;
  let type = req.body.type;
  fetch("http://localhost:8983/solr/films/select",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "query":`${type}:${`"${search}"`}`
  })
})
  .then( res => res.json())
    .then(data => {
      res.send({
        data : data.response.docs,
        value:req.body.search
    })}
  )
  .catch(err => console.log(err))
})


    app.listen(port, () => console.log(`Example app listening on port ${port}!`))