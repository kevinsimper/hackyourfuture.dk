export default ({ children }) => {
  return (
    <div className={'Content'}>
      <style jsx>
        {`
          .Content {
            max-width: 800px;
            padding: 20px;
            margin: 0 auto;
            font-size: 1.4rem;
            line-height: 2.2rem;
          }
        `}
      </style>
      {children}
    </div>
  )
}
