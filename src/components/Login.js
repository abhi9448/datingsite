import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.history.push("/home");
  }
 
  if(email==="a"&& password===123){
   
    handleSubmit()
   
  }
  


  return (
    <div className="div2">
      <header className="header">
        <h2>Indian Cupid</h2>
      </header>

      <nav className="nav">
        <div className="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <br></br>
            <Button block size="lg" type="submit" disabled={!validateForm()} onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </div>
      </nav>
      <div className="footer"> © 2020 Copyright: Indiancupid.com</div>
    </div>
  );
}
