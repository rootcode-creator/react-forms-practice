import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        placeholder="whats your name"
        value={formData.fullName}
        onChange={handleInputChange}
      />

      <br />
      <br />
      <label htmlFor="userName">Username:</label>
      <input
        id="userName"
        name="userName"
        type="text"
        placeholder="whats your username"
        value={formData.userName}
        onChange={handleInputChange}
      />

      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="whats your password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
