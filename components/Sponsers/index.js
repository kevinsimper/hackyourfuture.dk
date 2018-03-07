const sponsers = [
  'tuborgfond.png',
  'foreningen_orange.png',
  'zibragroup.png',
  'koebenhavns-kommune.png'
]
export default () => (
  <div className="wrapper">
    <style jsx>
      {`
        .sponsers {
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
        }
        .sponser {
          width: 50%;
          padding: 20px;
        }
        .thanks {
          text-align: center;
          color: #787878;
          font-size: 1rem;
        }
        @media (min-width: 800px) {
          .sponser {
            width: 25%;
          }
        }
      `}
    </style>
    <div className="thanks">Thanks to our sponsers</div>
    <div className="sponsers">
      {sponsers.map((s, idx) => (
        <div className="sponser" key={idx}>
          <img src={'/static/sponsers/' + s} />
        </div>
      ))}
    </div>
  </div>
)
