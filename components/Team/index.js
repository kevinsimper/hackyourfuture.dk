import data from './data.json'

export default () => {
  return (
    <div className="mentors">
      <style jsx>
        {`
          .mentors {
            display: flex;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
          }
          .mentor {
            width: 50%;
            padding: 20px;
            text-align: center;
          }
          @media (min-width: 600px) {
            .mentor {
              width: 33%;
            }
            .mentor .image {
              height: 25vw;
              width: 25vw;
            }
          }
          @media (min-width: 900px) {
            .mentor {
              width: 25%;
            }
            .mentor .image {
              height: 20vw;
              width: 20vw;
            }
          }
          .mentor img {
            width: 100%;
            filter: grayscale(100%);
          }
          .image {
            height: 33vw;
            width: 33vw;
            max-width: 250px;
            max-height: 250px;
            overflow: hidden;
            border-radius: 100%;
            display: inline-block;
          }
          .mentorName {
            text-align: center;
            padding: 10px;
          }
        `}
      </style>
      {data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item, key) => {
          return (
            <div className={'mentor'} key={key}>
              <div className="image">
                {item.photo ? (
                  <img src={item.photo} />
                ) : (
                  <img
                    src={'/static/hackyourfuture.png'}
                    style={{ width: '150%', maxWidth: '150%' }}
                  />
                )}
              </div>
              <div className="mentorName">
                {item.name}
                <div>
                  {item.github && (
                    <a href={item.github}>
                      <img
                        style={{ width: 33, padding: 3, opacity: 0.5 }}
                        src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                        alt="Github"
                      />
                    </a>
                  )}
                  {item.linkedin && (
                    <a href={item.linkedin}>
                      <img
                        style={{ width: 33, padding: 3, opacity: 0.5 }}
                        src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                        alt="Linkedin"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
