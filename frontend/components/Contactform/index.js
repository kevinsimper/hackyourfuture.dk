export default ({ email }) => (
  <form method="POST" action={`https://formspree.io/${email}`}>
    <style jsx>
      {`
        label,
        textarea,
        input {
          display: block;
          width: 100%;
        }
        .label {
          margin-bottom: 10px;
        }
        .textarea {
          border: 2px solid #111;
          min-height: 200px;
          padding: 6px;
          font-size: 1rem;
        }
        .input {
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
      Message:
      <textarea className="textarea" name="message" />
    </label>
    <label className="label">
      Your name:
      <input className="input" type="text" name="name" />
    </label>
    <label className="label">
      Your email:
      <input className="input" type="text" name="_replyto" />
    </label>
    <button className="submit" type="submit">
      Send
    </button>
  </form>
)
