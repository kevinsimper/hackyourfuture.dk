import Head from 'next/head'
import Layout from '../components/Layout'
import Content from '../components/Content'
import { getApi } from '../services/api'
import Router from 'next/router'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ''
    }
  }
  handleLogin() {
    console.log('Logging in!', this.state.email)
    AccountKit.login(
      'EMAIL',
      { emailAddress: this.state.email },
      this.loginCallback
    )
  }
  loginCallback(response) {
    console.log(response.status)
    if (response.status === 'PARTIALLY_AUTHENTICATED') {
      var code = response.code
      var csrf = response.state
      fetch(`${getApi()}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      })
        .then(res => res.json())
        .then(body => {
          window.localStorage.ACCESS_TOKEN = body.token
          Router.push('/dashboard')
        }).catch(e => console.log(e))
      // Send code to server to exchange for access token
    } else if (response.status === 'NOT_AUTHENTICATED') {
      // handle authentication failure
    } else if (response.status === 'BAD_PARAMS') {
      // handle bad parameters
    }
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>Login</title>
        </Head>
        <Content>
          <style jsx>{`
            .email {
              width: 100%;
              max-width: 300px;
              font-size: 1.4rem;
            }
            button {
              font-size: 1.4rem;
              background: #2ecc40;
              color: white;
              padding: 10px 20px;
              margin: 10px 0 0;
              border: none;
            }
          `}</style>
          <h2>Login</h2>
          <label>
            <div>Email:</div>
            <input
              className="email"
              type="email"
              name="email"
              onChange={event => {
                this.setState({ email: event.target.value })
              }}
              value={this.state.email}
            />
          </label>
          <div>
            <button
              onClick={() => {
                this.handleLogin()
              }}
            >
              Login
            </button>
          </div>
          <script src="https://sdk.accountkit.com/en_US/sdk.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            AccountKit_OnInteractive = function () {
              console.log('Accountkit ready')
              AccountKit.init({
                appId: "2001073706809465",
                state: "prettyfly",
                version: "v1.0"
              })
            }
          `
            }}
          />
        </Content>
      </Layout>
    )
  }
}
