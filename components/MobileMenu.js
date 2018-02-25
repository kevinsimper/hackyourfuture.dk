export default () => {
  return (
    <div className="mobile-menu">
      <style jsx>
        {`
          .mobile-menu {
            display: none;
            position: absolute;
            top: 0px;
            left: 0px;
            background: white;
            right: 0px;
            bottom: 0px;
            padding: 20px;
          }
          .mobile-menu a {
            display: block;
          }
        `}
      </style>
      <a href="/">Home</a>
      <a href="http://hackyourfuture.net/apply">Apply</a>
      <a href="http://hackyourfuture.net/index#contact">Contact</a>
    </div>
  )
}
