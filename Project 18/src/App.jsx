import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* Navbar */}
      <div className="navbar">
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Content */}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Welcome to My Website
      </h1>

    </div>
  );
}

export default App;