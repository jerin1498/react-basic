import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="">
      <form action="">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
