require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const loginRoutes = require('./src/routes/login')
let app = express()
const { API_SECRET = 'keyboardcat' } = process.env
const { admin } = require('./src/services/firebase')
var db = admin.firestore()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.options('*', cors())
app.get('/', (req, res) => {
  res.send('Hi Backend')
})

app.use('/login', loginRoutes)
app.post('/graphql', (req, res) => {
  const decoded = jwt.verify(req.headers.authorization.split(' ')[1], API_SECRET)
  res.send(decoded)
})

const { PORT = 3001 } = process.env
app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
