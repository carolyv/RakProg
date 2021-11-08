import React from 'react'
import { Form, Input, Button } from 'antd';
import { Context } from '../store'
import { useContext, useState } from 'react'
import { loginUser } from '../store/actions'



function Login() {
    const[password, setPassword] = useState('')
    const[email, setEmail] = useState('')
    const[state, dispatch] = useContext(Context)

    const onFinishError = () => {
        console.log('Failed');
    };

    const handleSubmit = async (e) => {
        setEmail(e.email);
        setPassword(e.password)
    };

    const loginData = {
        email,
        password
    }

    const res = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    if(data.token) {
        console.log("Success!")
        dispatch(loginUser(data))
    } else {
        console.log("Wat")
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishError}
            autoComplete="off"
        >
            <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Please input your e-mail!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
export default Login;