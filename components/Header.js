import { links } from './Navigation'

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
        {links.map((link, key) => (
          <a href={link[1]} className="HeaderLink" key={key}>
            {link[0]}
          </a>
        ))}
      </div>
    </div>
  )
}
