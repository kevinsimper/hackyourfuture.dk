export default ({children}) => {
  return (
    <div>
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
      {children}
    </div>
  )
}
