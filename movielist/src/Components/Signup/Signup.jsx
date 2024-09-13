// signup.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Signup.css";  // Ensure the correct path to your CSS file

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Signup successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="signupContainer">
      <h2 className="title">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="input"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
          className="input"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } })}
          className="input"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="tel"
          placeholder="Phone Number"
          {...register("phone", { required: "Phone number is required" })}
          className="input"
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        <select {...register("profession", { required: "Profession is required" })} className="input">
          <option value="">Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
        </select>
        {errors.profession && <p className="error">{errors.profession.message}</p>}

        <button type="submit" className="button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
