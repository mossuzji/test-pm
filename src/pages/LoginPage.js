import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login user function issue")
    setAuthenticate(true)
    navigate('/')
  }
  return (
    <>
      <Form onSubmit = {(e)=> loginUser(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="자동 로그인" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={login}>
        로그인
      </Button>
    </Form>
    </>
  )
}

export default LoginPage;