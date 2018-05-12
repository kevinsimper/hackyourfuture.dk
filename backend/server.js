const express = require('express')
const cors = require('cors')
let app = express()

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hi Backend')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
