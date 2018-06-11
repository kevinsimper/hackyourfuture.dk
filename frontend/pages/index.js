import Head from 'next/head'
import CoreTeam from './../components/CoreTeam'
import Team from '../components/Team/'
import Layout from '../components/Layout'
import Content from '../components/Content'
import marked from 'marked'

const content = `
HackYourFuture is an educational program that aims to train refugees and asylum seekers to become web-developers and empower them by opening the doors to a very in-demand job market.

In our free 6-month program we train refugees, asylum seekers and people with limited access to further education in modern JavaScript software development. Our aim is to have our students land their first software development job after finishing our course. We achieve this by not only teaching them relevant frameworks, but also by preparing them for a job market that requires independent problem solving and continuous self-development. After completion of our program we guide students towards work via our network. With our team of experienced professional developers we have created a curriculum around the needs of non-western students. Our teachers are all volunteers and extremely passionate about coding.

We believe talented refugees are a great opportunity for society and we are here to give them a helping hand to make use of their potential.
`

export default () => {
  return (
    <Layout>
      <Head>
        <title>HackYourFuture Copenhagen</title>
      </Head>
      <style jsx>
        {`
          .content {
            max-width: 760px;
            margin: 0px auto;
            background: white;
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
              0 1px 10px 0 rgba(0, 0, 0, 0.12),
              0 2px 4px -1px rgba(0, 0, 0, 0.2);
            padding: 15px;
          }
          @media (min-width: 768px) {
            .content {
              padding: 40px;
            }
          }
          .contentExtra {
            max-width: 760px;
            margin: 0px auto;
          }
          .contentExtra h2 {
            text-align: center;
          }
          .facebook {
            max-width: 360px;
            margin: 0 auto;
          }
          .logo {
            text-align: center;
            padding: 50px;
          }
          .Background {
            background: linear-gradient(
                rgba(255, 0, 0, 0.35),
                rgba(255, 0, 0, 0.55)
              ),
              url(https://images.unsplash.com/photo-1515518554912-63b4da53597d?ixlib=rb-0.3.5…EyMDd9&s=bbe35f4…&auto=format&fit=crop&w=2850&q=80);
            background-size: contain;
            background-repeat: no-repeat;
            background-size: 200%;
            height: 50vw;
            max-height: 450px;
            min-height: 300px;
          }
          @media (min-width: 768px) {
            .Background {
              background-size: 100%;
            }
          }
        `}
      </style>
      <div className="Background">
        <div className="logo">
          <img src="/static/hackyourfuture.png" style={{ height: 200 }} />
        </div>
      </div>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Content>
      <div style={{ height: 50 }} />
      <div className="contentExtra">
        <h2>Find us on Social Media</h2>
        <div className="facebook">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackyourfuturecopenhagen%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=452614524799595"
            width="340"
            height="214"
            styles={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
          />
        </div>
      </div>
      <h2 style={{ textAlign: 'center' }}>Core Team</h2>
      <CoreTeam />
      <h2 style={{ textAlign: 'center' }}>Mentors</h2>
      <Team />
    </Layout>
  )
}
