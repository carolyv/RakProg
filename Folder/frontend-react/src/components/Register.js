import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';

function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log('Yeeyee, account has been created!')
    }

    const onFinishError = () => {
        console.log('Nah')
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
            <Form.Item label="First name" name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]}>
                <Input.firstName />
            </Form.Item>

            <Form.Item label="Last name" name="lastName" rules={[{ required: true, message: 'Please input your last name!' }]}>
                <Input.lastName />
            </Form.Item>

            <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input.firstName />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter a password!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Register!
                </Button>
            </Form.Item>
        </Form>
    )
}
export default Register;
