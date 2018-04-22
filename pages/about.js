import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Map from '../components/Map'

let content = `
# About Us

## What is hack your future?
HackYourFuture is a non-profit that aims to train refugees and asylum seekers to become web-developers and empower them by opening the doors to a very in-demand job market.

In our 6-month program we train students with and without a coding background in modern JavaScript software development. Our aim is to have our students land their first software development job after finishing our course and we do everything we can to prepare them as well as possible. With our team of experienced senior developers we have created a program around the special needs of refugees. Our teachers are all volunteers and extremely passionate about coding.

We believe talented refugees are a great opportunity for society and we are here to give them a helping hand to make use of their potential.


## How did it start?
Reaching its peak in 2015, many European countries saw the arrival of a large number of refugees, many among them with high levels of education. However, the past teaches us that talented newcomers have trouble finding work in their new countries of residence. At the same time we observed a very large demand for web-developers on the job market. A lot of companies struggle to grow at the rate that they want because they lack qualified developers. The modern day developer doesn’t need to be the next Mark Zuckerberg either, programming has also become a sort of new blue-collar job, with ample opportunities in an ever-expanding industry.
Here we see an enormous opportunity for a win-win situation. By training refugees in web-development we increase their chances of employment significantly and at the same time increase the amount of developers on the job market and further integration.

## Core values
There is a lot of unfulfilled potential within various disadvantaged groups of people. A lot of talent in these groups is being wasted, simply because of a lack of opportunity.

We believe coding can help people in disadvantaged situations live up to their potential, get back control of their own lives and be an important change to their environment.

** Fundamentals of the HackYourFuture organisation **

HackYourFuture is not about one or a handful of people, but about a community of developers who take the responsibility to share their knowledge and passion to people who need it the most. There’s no room for ego. We teach because we love programming, and we teach because we care about others.
We teach with volunteers who are professional developers themselves. We want our students to learn from the best.
We teach skills that are 100% relevant for the local job market. Our goal is getting people to work, this only works if people learn skills that are in demand.
We don’t charge our students money, and try to remove most barriers to studying with us.
Our target audience are talented people who have significantly less opportunities to succeed in a professional setting than the majority of society.
We expect our students to put in as much time as they can. Without real commitment, you cannot start a career in programming, and therefore you can’t study at HackYourFuture.


## How can I get involved?
Write us a message

Developer? Become a mentor - write us a message first though, so we can figure out what would make most sense for you to do

Not a developer? We can always use extra hands on deck - let us know how much time you would like to dedicate to volunteering and what you are good at. We can use help with Social Media, copywriting, photography, CV help, interview coaching, and tons of other small things. - We just need to figure out first where you would most like to get active.
`
export default () => {
  return (
    <Layout>
      <Head>
        <title>About HackYourFuture Copenhagen</title>
      </Head>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        <Map />
      </Content>
    </Layout>
  )
}
