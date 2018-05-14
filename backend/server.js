const express = require('express')
const cors = require('cors')
const Querystring = require('querystring')
const Request = require('request')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
let app = express()
const account_kit_api_version = 'v1.0'
const app_id = process.env.FB_APP_ID
const app_secret = process.env.FB_APP_SECRET
const app_access_token = ['AA', app_id, app_secret].join('|')
const me_endpoint_base_url = 'https://graph.accountkit.com/v1.0/me'
const token_exchange_base_url = 'https://graph.accountkit.com/v1.0/access_token'
const { API_SECRET = 'keyboardcat' } = process.env

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hi Backend')
})

const generateToken = accountkit => {
  return jwt.sign({
    user_access_token: accountkit.user_access_token,
    refresh_interval: accountkit.refresh_interval,
    user_id: accountkit.user_id,
    email: accountkit.email
  }, API_SECRET)
}

app.post('/login', (req, res) => {
  const params = {
    grant_type: 'authorization_code',
    code: req.body.code,
    access_token: app_access_token
  }
  var token_exchange_url =
    token_exchange_base_url + '?' + Querystring.stringify(params)
  Request.get({ url: token_exchange_url, json: true }, function(
    err,
    resp,
    respBody
  ) {
    var accountkit = {
      user_access_token: respBody.access_token,
      refresh_interval: respBody.token_refresh_interval_sec,
      user_id: respBody.id
    }

    // get account details at /me endpoint
    var me_endpoint_url =
      me_endpoint_base_url + '?access_token=' + respBody.access_token
    Request.get({ url: me_endpoint_url, json: true }, function(
      err,
      resp,
      respBody
    ) {
      console.log(respBody)
      // send login_success.html
      if (respBody.phone) {
        accountkit.phone_num = respBody.phone.number
      } else if (respBody.email) {
        accountkit.email = respBody.email.address
      }
      res.send({
        token: generateToken(accountkit)
      })
    })
  })
})

const { PORT = 3001 } = process.env
app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
