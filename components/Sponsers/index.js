const sponsers = [
  ['tuborgfond.png', 'http://www.tuborgfondet.dk/'],
  ['foreningen_orange.png', 'https://roskildefestivalgruppen.dk/'],
  ['zibragroup.png', 'https://www.zibrawireless.dk/'],
  [
    'koebenhavns-kommune.png',
    'https://www.kk.dk/indhold/kultur-og-projektstoette'
  ]
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
          <a href={s[1]}>
            <img src={'/static/sponsers/' + s[0]} />
          </a>
        </div>
      ))}
    </div>
  </div>
)
