// Login.js
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.name === data.name && storedUser.password === data.password) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
