import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" onChange={handleEmailChange} />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefulForm;
