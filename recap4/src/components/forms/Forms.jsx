import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`
      username: ${username},
      email: ${email},
      password: ${password}
      `);

    setUsername("");
    setEmail("");
    setPassword("");

    // const res1 = axios.post("url", { username, email, password });
    // const res2 = fetch.post("url", {method: "POST", data:{ username, email, password }}).then()
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleFormSubmit}>
        <h1 className="text-success">FormS</h1>
        <Form.Group className="text-danger">
          <Form.Label>Username : {username} </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Username"
            id="username"
            onChange={handleUsername}
            value={username || ""}
          />
        </Form.Group>

        <Form.Group className="text-danger">
          <Form.Label>Email address : {email} </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="email"
            onChange={handleEmail}
            value={email || ""}
          />
        </Form.Group>

        <Form.Group className="text-danger">
          <Form.Label>Password : {password}</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={handlePassword}
            value={password || ""}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Forms;
