function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          name: "me",
          email: "me@mit.edu",
          password: "secret",
          balance: 100,
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
