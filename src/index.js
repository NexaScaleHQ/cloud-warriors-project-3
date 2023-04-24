const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        // console.log(response.data)
        res.json(response.data)
    })
    .catch((error) => {
        console.log(error)

        res.sendStatus(500)
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})