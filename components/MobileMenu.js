import { links } from './Navigation'

export default () => {
  return (
    <div className="mobilemenu" id="mobilemenu">
      <style jsx>
        {`
          .mobilemenu {
            display: none;
            position: absolute;
            top: 0px;
            left: 0px;
            background: white;
            right: 0px;
            bottom: 0px;
            padding: 20px;
          }
          .mobilemenu a {
            display: block;
            font-size: 2rem;
            line-height: 3rem;
            text-decoration: none;
          }
          .showmenu {
            display: block !important;
          }
        `}
      </style>
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
