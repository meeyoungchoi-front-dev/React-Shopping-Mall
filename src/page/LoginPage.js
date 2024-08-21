import React from 'react'
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
  return (
    <div>
      <h1>로그인</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력하세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
        </Form.Group>
      </Form>
    </div>
  )
}

export default LoginPage