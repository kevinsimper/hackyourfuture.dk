import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Contactform from '../components/Contactform'

let content = `
# Contact us

Feel to contact us about anything, we always happy to chat!

<a href="mailto:christopher@hackyourfuture.net">christopher@hackyourfuture.net</a>

or use the contact form below

`
export default () => (
  <Layout>
    <Head>
      <title>Contact - HackYourFuture Copenhagen</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <Contactform email={'christopher@hackyourfuture.net'} />
    </Content>
  </Layout>
)
