import Head from 'next/head'
import Layout from '../components/Layout'
import Content from '../components/Content'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: 'test'
    }
  }
  handleLogin() {
    console.log('Logging in!')
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
                version: "v1.1"
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
