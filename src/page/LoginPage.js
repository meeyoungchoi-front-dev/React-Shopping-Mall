import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticattionAction';

const LoginPage = ({setAuthenticate}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    event.preventDefault();
    // setAuthenticate(true);
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  }
  

  return (
    <Container>
      <h1>로그인</h1>
      <Form onSubmit={(event) => {loginUser(event)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"   onChange={(event) => setId(event.target.value)}/>
          <Form.Text className="text-muted">
            이메일 주소를 입력하세요
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage