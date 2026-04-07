import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!formData.email) {
  newErrors.email = " ";
} else if (!formData.email.includes("@gmail.com")) {
  newErrors.email = " ";
  alert("Invalid Gmail! Please enter a valid @gmail.com email");
}
    if (!formData.password) {
  newErrors.password = " ";
  alert("Password is required");
} else if (formData.password.length < 8) {
  newErrors.password = " ";
  alert("Invalid Password! Must be at least 8 characters");
}

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful!");
      console.log(formData);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="text"
          name="email"
          placeholder="Enter Gmail"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;