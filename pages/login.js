import Head from 'next/head'
import Layout from '../components/Layout'
import Content from '../components/Content'

export default () => (
  <Layout>
    <Head>
      <title>Login</title>
    </Head>
    <Content>
      <div>Login</div>
      <input type="email" name="email" />
      <button>Login</button>
    </Content>
  </Layout>
)
