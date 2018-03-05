import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'

let content = `
# Learn

We are super engaged in learning and especially about web development!

This is the resources we use and that we can recommend:

### Hack Your Future Github organisation
https://github.com/hackYourFuture-CPH

This contains all the courses we teach the students!

### Khan Academy
https://www.khanacademy.org/computing/computer-programming/html-css

We are a big fan of Khan Academy and the courses that they have!



`
export default () => (
  <Layout>
    <Head>
      <title>Learn - HackYourFuture Copenhagen</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Content>
  </Layout>
)
