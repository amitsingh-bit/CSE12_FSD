import React from "react";

// Simple Function (not a component)
function add(a, b) {
  return a + b;
}

// React Component
function Welcome() {
  return <h2>Welcome to My First React Component</h2>;
}

// Another Component
function Info() {
  return (
    <div>
      <h3>What is a Component?</h3>
      <p>A component is a reusable piece of UI in React.</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Your First React Component</h1>

      {/* Using component */}
      <Welcome />

      <Info />

      <h3>How to use Component?</h3>
      <p>Use component like HTML tag: &lt;Welcome /&gt;</p>

      <h3>Role of Components</h3>
      <ul>
        <li>Reusable UI blocks</li>
        <li>Easy to maintain</li>
        <li>Divide UI into small parts</li>
      </ul>

      <h3>Difference between Function and Component</h3>
      <p>Normal Function Result: {add(10, 20)}</p>

      <h3>Interview Question</h3>
      <p>Q: What is a React Component?</p>
      <p>A: A reusable UI block written as a function or class.</p>
    </div>
  );
}

export default App;