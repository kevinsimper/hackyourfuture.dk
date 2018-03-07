import Sponsers from './Sponsers'

export default () => (
  <footer className="footer">
    <style jsx>
      {`
        .footer {
          margin-top: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .links {
          width: 100%;
          min-height: 300px;
          background: #1F2D3D;
          background: linear-gradient(to bottom right, #2b3e52, #0f3b6d);
          color: #FFF
          text-align: center;
          line-height: 300px;
        }
      `}
    </style>
    <Sponsers />
    <div className="links">Copyright HackYourFuture Copenhagen 2018</div>
  </footer>
)
