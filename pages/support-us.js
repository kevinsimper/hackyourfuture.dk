import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'

let content = `
# Want to support us?

HackYourFuture is a non-profit organization and run on a lot of voluntary work. The organization is started by individuals and not backed by a larger institution, but is a grassroots initiative by citizens. Although we try to do everything as lean as we can we still dependent on outside support to make everything run.

### What is the money used for?
The money is spent on cost related to the classes for the students. We help the students with transport costs, we provide a bit of food at the classes and we need some technical equipment. We also employ a few people to organize and develop the project, a part of this is about collaborating with the municipalities to allow the students to take the courses as their “full-time job” and collaboration with companies on internships for the students.

### How can I donate money?
Please get in contact with us, we would really like to talk to you!

Or to our bank account here
Reg. nr. 8401
Konto. nr. 0001028176

### Can I help with more than money?
Yes, we are looking for equipment for the students like laptops that will allow the students to follow the courses if they don’t have a computer of their own.


`
export default () => (
  <Layout>
    <Head>
      <title>Support - HackYourFuture Copenhagen</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Content>
  </Layout>
)
