function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="white"
      bgcolor="secondary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <CreateAccountForm setShow={setShow} />
        ) : (
          <CreateMessage setShow={setShow} />
        )
      }
    />
  );

  function CreateAccountForm(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleCreate() {
      console.log(name, email, password);
      if (!validate(name, "name")) return;

      if (!validate(email, "email")) return;

      if (!validate(password, "password")) return;

      ctx.users.push({ name, email, password, balance: 500 });
      setShow(false);
    }

    return (
      <>
        Name
        <br />
        <input
          type="input"
          className="form-control"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        Email address
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
          onClick={handleCreate}
          disabled={disabled}
        >
          Create Account
        </button>
      </>
    );
  }

  function CreateMessage(props) {
    return (
      <>
        <h5>Success</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
        >
          Add another account
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
    if (label === "password" && field.length < 8) {
      setStatus("Error: " + label + " must be at least 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
}
