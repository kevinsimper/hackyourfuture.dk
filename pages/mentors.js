import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Contactform from '../components/Contactform'
import Team from '../components/Team'

let content = `
# Mentors

HackYourFuture is getting a lot of help from awesome volunteer mentors that want to help new people with an interest in programming.

### What we teach
The core language we teach is JavaScript, around which we have structured our curriculum. We also teach our students HTML5, CSS3, React, Node.js (express) and Databasing in MySQL.
However, what we value most is that our students learn how to think like a programmer, how to solve problems, and how to manage a project. These are crucial supplementary skills that get our students ready for their first web-developer job.

The teaching is split up into modules of 3-5 weeks each. Each module is taught by a different pair of mentors, so that the students can also be introduced to a broad set of working professionals in the field.

`
export default () => (
  <Layout>
    <Head>
      <title>Learn - HackYourFuture Copenhagen</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img src={'https://i.imgur.com/jspZFfk.jpg'} />
      <h2>Would you like to help?</h2>
      <Contactform />
    </Content>
    <h2 style={{ textAlign: 'center' }}>The team</h2>
    <Team />
  </Layout>
)
