import CoreTeamData from './coreteam.json';

const CoreTeam = () => {
    return (
        <div className="members">
            <style jsx>
                {`
          .members {
            display: flex;
            justify-content: center;
            max-width: 1200px;
          }
          .member {
            width: 50%;
            padding: 20px;
            text-align: center;
          }
          @media (min-width: 600px) {
            .member {
              width: 33%;
            }
            .member .image {
              height: 25vw;
              width: 25vw;
            }
          }
          @media (min-width: 900px) {
            .member {
              width: 25%;
            }
            .member .image {
              height: 20vw;
              width: 20vw;
            }
          }

          .image {
            height: 33vw;
            width: 33vw;
            filter: grayscale(100%);
            max-width: 250px;
            max-height: 250px;
            overflow: hidden;
            border-radius: 100%;
            display: inline-block;
          }
        `}
            </style>
            {CoreTeamData.map((person, key) => {
                return (
                    <div className='member' key={key}>
                        <img className='image'
                            src={person.photo ? person.photo : `/static/hackyourfuture.png`} />
                        <p className='memberName'>{person.name}</p>
                        <p className='memberName'>{person.role}</p>
                        <a href={`mailto:${person.email}`}>
                        <img
                             style={{ width: 33, padding: 3, opacity: 0.5 }}    src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg'
                            alt="Mail Icon" />
                        </a>
					    <a href={person.linkedin}>
                            <img 
                                style={{ width: 33, padding: 3, opacity: 0.5 }}src='https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg'
                                alt="Linkedin Icon" />
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default CoreTeam;