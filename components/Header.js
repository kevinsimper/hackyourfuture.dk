export default () => {
  return (
    <div className="header">
      <style jsx>
        {`
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
        `}
      </style>
      <a href="/" className="HeaderLink">
        Home
      </a>
      <a href="http://hackyourfuture.net/apply" className="HeaderLink">
        Apply
      </a>
      <a href="http://hackyourfuture.net/index#contact" className="HeaderLink">
        Contact
      </a>
    </div>
  )
}
