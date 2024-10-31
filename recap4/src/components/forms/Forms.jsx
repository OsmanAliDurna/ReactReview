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

  return (
    <Container className="mt-4">
      <Form>
        <h1 className="text-success">FormS</h1>
        <Form.Group className="text-danger" controlId="username">
          <Form.Label>Username : {username} </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Username"
            onChange={handleUsername}
          />
        </Form.Group>

        <Form.Group className="text-danger" controlId="email">
          <Form.Label>Email address : {email} </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
          />
        </Form.Group>

        <Form.Group className="text-danger" controlId="password">
          <Form.Label>Password : {password}</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={handlePassword}
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
