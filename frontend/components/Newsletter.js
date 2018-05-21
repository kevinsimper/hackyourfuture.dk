export default () => (
  <form
    action="https://hackyourfuture.us18.list-manage.com/subscribe/post?u=3d0c0055da1f780c58ef56540&amp;id=e9cde1fe9a"
    method="post"
  >
    <style jsx>
      {`
        .email {
          font-size: 1rem;
          padding: 8px;
          margin: 0 10px;
          width: 240px;
        }
        .submit {
          font-size: 1rem;
          border: 0;
          background: #2ecc40;
          color: white;
          padding: 10px;
        }
        .header {
          margin: 0 0 10px;
        }
        .description {
          font-size: 1rem;
          max-width: 300px;
          margin: 0 auto 10px;
        }
      `}
    </style>
    <h3 className="header">Sign up for our newsletter!</h3>
    <div className="description">
      We will send a monthly update on the project and what new cool things we
      are doing at HackYourFuture.
    </div>
    <input
      type="email"
      name="EMAIL"
      className="email"
      placeholder="you@example.com"
    />
    <input
      type="submit"
      value="Subscribe"
      name="subscribe"
      className="submit"
    />
  </form>
)
