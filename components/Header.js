export default () => {
  return (
    <div className="header">
      <style jsx>
        {`
          .header {
            min-height: 65px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid #b8c1cb;
            background: white;
            padding: 0 20px;
            overflow: auto;
          }
          .HeaderLink {
            margin: 0 10px;
            text-decoration: none;
          }
          .HeaderLink:hover {
            text-decoration: underline;
          }
          .logo {
            height: 40px;
            margin-right: 30px;
          }
        `}
      </style>
      <img src="/static/hackyourfuture.png" className="logo" />
      <div>
        <a href="/" className="HeaderLink">
          Home
        </a>
        <a href="/about" className="HeaderLink">
          About
        </a>
        <a href="http://hackyourfuture.net/apply" className="HeaderLink">
          Apply
        </a>
        <a href="/learn" className="HeaderLink">
          Learn
        </a>
        <a href="/support-us" className="HeaderLink">
          Support us
        </a>
        <a href="/contact" className="HeaderLink">
          Contact
        </a>
      </div>
    </div>
  )
}
