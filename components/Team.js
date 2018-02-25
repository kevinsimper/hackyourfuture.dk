export default () => {
  return (
    <div className="mentors">
      <style jsx>
        {`
          .mentor {
            width: 50%;
            padding: 20px;
            text-align: center;
          }
          @media (min-width: 768px) {
            .mentor {
              width: 33%;
            }
          }
          .mentor img {
            border-radius: 100%;
            width: 90%;
          }
          .mentor_name {
            text-align: center;
          }
          .mentors {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
        return (
          <div className={'mentor'}>
            <img src={'https://placeimg.com/300/300/people'} />
            <div className="mentor_name">Kevin Simper</div>
          </div>
        )
      })}
    </div>
  )
}
