import Sponsers from './Sponsers'
import Newsletter from './Newsletter'

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
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 300px;
          background: #1f2d3d;
          background: linear-gradient(to bottom right, #2b3e52, #0f3b6d);
          color: #fff;
          text-align: center;
        }
        .newsletter {
          padding: 50px 0;
        }
      `}
    </style>
    <Sponsers />
    <div className="links">
      <div className="newsletter">
        <Newsletter />
      </div>
      <div>Copyright HackYourFuture Copenhagen 2018</div>
    </div>
  </footer>
)
