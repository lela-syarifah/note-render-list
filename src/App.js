import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import welcome from "./welcome.png";

function App() {
  const logged = true;
  // let pages;
  // if (logged) {
  //   pages = <Home />;
  // } else {
  //   pages = <Login />;
  // }
  return (
    <div className="App">
      {/* <div>{pages}</div> */}
      {logged ? (
        <div>
          <Home />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
