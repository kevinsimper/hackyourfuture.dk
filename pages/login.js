import Head from 'next/head'
import Layout from '../components/Layout'
import Content from '../components/Content'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: 'kevin.simper@gmail.com'
    }
  }
  handleLogin() {
    console.log('Logging in!', this.state.email)
    AccountKit.login(
      'EMAIL',
      {emailAddress: this.state.email},
      this.loginCallback
    );
  }
  loginCallback(response) {
    console.log(response.status)
    if (response.status === "PARTIALLY_AUTHENTICATED") {
      var code = response.code;
      var csrf = response.state;
      // Send code to server to exchange for access token
    }
    else if (response.status === "NOT_AUTHENTICATED") {
      // handle authentication failure
    }
    else if (response.status === "BAD_PARAMS") {
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
          <div>Login</div>
          <input
            type="email"
            name="email"
            onChange={event => {
              this.setState({ email: event.target.value })
            }}
            value={this.state.email}
          />
          <button onClick={() => { this.handleLogin() }}>Login</button>
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
