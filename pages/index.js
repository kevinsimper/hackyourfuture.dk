import Head from 'next/head'

export default () => {
  return (
    <div>
      <Head>
        <title>HackYourFuture Copenhagen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style global jsx>{`
        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          font-family: 'Source Sans Pro', sans-serif;
          margin: 0px;
          color: #111;
          background-color: #f5f5f5 !important;
          padding-bottom: 100px;
        }
        img {
          max-width: 100%;
        }
        a {
          color: #111;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>
        {`
          .content {
            max-width: 760px;
            margin: 0px auto;
            background: white;
            box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
            padding: 15px;
          }
          @media(min-width: 768px) {
            .content {
              padding: 40px;
            }
          }
          .facebook {
            max-width: 360;
            margin: 0 auto;
          }
          .logo {
            text-align: center;
            padding: 50px;
          }
          .header {
            min-height: 65px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #333;
            background: white;
            padding: 0 20px;
          }
          .HeaderLink {
            margin: 0 10px;
            text-decoration: none;
            text-transform: uppercase;
          }
          .HeaderLink:hover {
            text-decoration: underline;
          }
          .Background {
            background-image: url("https://images.unsplash.com/photo-1515518554912-63b4da53597d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbe35f46b5bd2640063b8516b2655c33&auto=format&fit=crop&w=2850&q=80");
            background-size: contain;
            background-repeat: no-repeat;
            background-size: 200%;
          }
          @media (min-width: 768px) {
            .Background {
              background-size: 100%;
            }
          }
        `}
      </style>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
      <div className="header">
        <a href="/" className="HeaderLink">
          Home
        </a>
        <a href="/" className="HeaderLink">Contact</a>
      </div>
      <div className="Background">
        <div className="logo">
          <img src="/static/hackyourfuture.png" style={{height: 200}} />
        </div>
        <div className="content">
          <p>
            HackYourFuture is a non-profit that aims to train refugees and asylum
            seekers to become web-developers and empower them by opening the doors
            to a very in-demand job market.
          </p>
          <p>
            In our 6-month program we train students with and without a coding
            background in modern JavaScript software development. Our aim is to
            have our students land their first software development job after
            finishing our course and we do everything we can to prepare them as
            well as possible. With our team of experienced senior developers we
            have created a program around the special needs of refugees. Our
            teachers are all volunteers and extremely passionate about coding.
          </p>
          <p>
            We believe talented refugees are a great opportunity for society and
            we are here to give them a helping hand to make use of their
            potential.
          </p>
          <p>- Christopher Klüter</p>
          <div className="facebook">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackyourfuturecopenhagen%2F&tabs=timeline&width=360&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1094159287288856"
              width="360"
              height="500"
              styles={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
            />
          </div>
      </div>
      </div>
    </div>
  )
}
