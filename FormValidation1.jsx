import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false); // visibility state
  const [errors, setErrors] = useState({});

  // Separate functions for each eye
  const togglePassword = () => setShowPassword(prev => !prev);
  const toggleConfirmPassword = () => setShowPassword(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";

    if (!phone) formErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      formErrors.phone = "Phone must be exactly 10 digits";

    if (!age) formErrors.age = "Age is required";
    else if (age < 1 || age > 100)
      formErrors.age = "Age must be between 1 and 100";

    if (!gender) formErrors.gender = "Select gender";
    if (!country) formErrors.country = "Select country";
    if (!password) formErrors.password = "Password required";
    if (confirmPass !== password)
      formErrors.confirmPass = "Passwords do not match";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="page">
      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f47fe0ff, #59c6d4ff);
          font-family: Arial, sans-serif;
        }

        .card {
          width: 360px;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 20px #d8247540;
        }

        h2 {
          text-align: center;
          color: #2c5282;
        }

        input, select {
          width: 100%;
          padding: 8px;
          margin-top: 6px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: #f0f8ff;
        }

        .password-box {
          position: relative;
        }

        .eye {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 18px;
        }

        .radio-group {
          display: flex;
          justify-content: space-around;
          margin-top: 8px;
        }

        button {
          width: 100%;
          padding: 10px;
          margin-top: 12px;
          background: linear-gradient(to right, #2c5282, #2b6cb0);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }

        .error {
          color: red;
          font-size: 12px;
        }
      `}</style>

      <div className="card">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="error">{errors.name}</p>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errors.email}</p>

          <input
            type="text"
            placeholder="Phone (10 digits)"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/[^0-9]/g, ""))
            }
            maxLength={10}
          />
          <p className="error">{errors.phone}</p>

          <input
            type="number"
            placeholder="Age (1-100)"
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <p className="error">{errors.age}</p>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                onChange={() => setGender("Male")}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={() => setGender("Female")}
              /> Female
            </label>
          </div>
          <p className="error">{errors.gender}</p>

          <select onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <p className="error">{errors.country}</p>

          {/* Password */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye" onClick={togglePassword}>
              
            </span>
          </div>
          <p className="error">{errors.password}</p>

          {/* Confirm Password */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <span className="eye" onClick={toggleConfirmPassword}>
              
            </span>
          </div>
          <p className="error">{errors.confirmPass}</p>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
