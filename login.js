function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [emailMatch, setEmailMatch] = React.useState(false);
  const [passwordMatch, setPasswordMatch] = React.useState(false);
  const ctx = React.useContext(UserContext);

  return <h1 className="feature-coming-soon">Feature Coming Soon...</h1>;

  function LoginForm(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleLogin() {
      console.log(email, password);

      if (!validate(email, "email")) return;

      if (!validate(password, "password")) return;
      setShow(false);
    }

    return (
      <>
        Email
        <br />
        <input
          type="input"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        Password
        <br />
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <button
          type="submit"
          className="btn btn-light"
          onClick={handleLogin}
          disabled={disabled}
        >
          Login
        </button>
      </>
    );
  }

  function LoginMessage(props) {
    return (
      <>
        <h5>Login Success</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
        >
          Logout
        </button>
      </>
    );
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label + " is required");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }

    setEmailMatch(false);
    setPasswordMatch(false);

    return true;
  }
}
