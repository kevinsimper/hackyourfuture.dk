export default ({ email }) => (
  <form method="POST" action={`https://formspree.io/${email}`}>
    <style jsx>
      {`
        textarea {
          display: block;
          width: 100%;
        }
        .label {
          display: block;
          margin-bottom: 10px;
        }
        .textarea {
          border: 2px solid #111;
          min-height: 200px;
          padding: 6px;
          font-size: 1rem;
        }
        .input {
          width: 100%;
          display: block;
          max-width: 350px;
          border: 2px solid #111;
          font-size: 1rem;
          padding: 4px;
        }
        .submit {
          margin: 10px 0 0;
          border: 2px solid #111;
          padding: 10px 15px;
          font-size: 1rem;
          cursor: pointer;
        }
        .submit:hover {
          border-color: #3d9970;
          color: #fff;
          background: #2ecc40;
        }
      `}
    </style>
    <label className="label">
      Your name:
      <input className="input" type="text" name="name" />
    </label>
    <label className="label">
      Address:
      <input className="input" type="text" name="address" />
    </label>
    <label className="label">
      Email:
      <input className="input" type="text" name="email" />
    </label>
    <label className="label">
      Phone:
      <input className="input" type="text" name="phone" />
    </label>
    <div>
      <label className="label">Do you have your own computer?</label>
      <label className="label">
        <input type="radio" value="yes" name="own-computer" /> Yes
      </label>
      <label className="label">
        <input type="radio" value="no" name="own-computer" /> No
      </label>
    </div>
    <label className="label">
      How did you hear about HackYourFuture?
      <textarea className="textarea" name="how-did-your-hear" />
    </label>
    <label className="label">
      What is your Educational background?
      <textarea className="textarea" name="education" />
    </label>
    <button className="submit" type="submit">
      Apply
    </button>
  </form>
)
