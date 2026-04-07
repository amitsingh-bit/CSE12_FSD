import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    course: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!formData.gender) newErrors.gender = "Select gender";

    if (!formData.course) newErrors.course = "Select course";

    if (!formData.terms) newErrors.terms = "Accept terms";

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <p className="error">{errors.name}</p>

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <p className="error">{errors.gender}</p>

        {/* Course Dropdown */}
        <select name="course" onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="BTech">BTech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>
        <p className="error">{errors.course}</p>

        {/* Terms */}
        <label>
          <input
            type="checkbox"
            name="terms"
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </label>
        <p className="error">{errors.terms}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;