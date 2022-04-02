function NavBar() {
  const [classActive, setClassActive] = React.useState("");
  const [active, setActive] = React.useState(false);
  function handleClick(e) {
    setActive(!active);
    if (active) {
      setClassActive("active");
    } else {
      setClassActive("");
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">
          <span title="Home">BadBank</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">
                <span title="Create a new account">Create Account</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/login/">
                <span title="Login to existing account">Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">
                <span title="Deposit money into existing account">Deposit</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">
                <span title="Withdraw money from existing account">
                  Withdraw
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">
                <span title="See current balance of existing account">
                  Balance
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">
                <span title="See all data for existing account">AllData</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
