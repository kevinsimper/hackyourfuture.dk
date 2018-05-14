const express = require('express')
const cors = require('cors')
const Querystring = require('querystring')
const Request = require('request')
const bodyParser = require('body-parser')
let app = express()
const account_kit_api_version = 'v1.0'
const app_id = process.env.FB_APP_ID
const app_secret = process.env.FB_APP_SECRET
const app_access_token = ['AA', app_id, app_secret].join('|')
const me_endpoint_base_url = 'https://graph.accountkit.com/v1.0/me'
const token_exchange_base_url = 'https://graph.accountkit.com/v1.0/access_token'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hi Backend')
})

app.get('/login', (req, res) => {
  const app_access_token = ['AA', app_id, app_secret].join('|')
  const params = {
    grant_type: 'authorization_code',
    code: req.params.code,
    access_token: app_access_token
  };
  var token_exchange_url = token_exchange_base_url + '?' + Querystring.stringify(params);
  Request.get({url: token_exchange_url, json: true}, function(err, resp, respBody) {
    var view = {
      user_access_token: respBody.access_token,
      expires_at: respBody.expires_at,
      user_id: respBody.id,
    };

    // get account details at /me endpoint
    var me_endpoint_url = me_endpoint_base_url + '?access_token=' + respBody.access_token;
    Request.get({url: me_endpoint_url, json:true }, function(err, resp, respBody) {
      // send login_success.html
      if (respBody.phone) {
        view.phone_num = respBody.phone.number;
      } else if (respBody.email) {
        view.email_addr = respBody.email.address;
      }
      res.send(view)
    });
  });
})

const { PORT = 3001 } = process.env
app.listen(PORT, () => {
  console.log('Listening on', PORT)
})
