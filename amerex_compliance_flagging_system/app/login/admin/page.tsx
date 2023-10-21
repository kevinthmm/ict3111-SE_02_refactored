'use client';
import {Button, Divider, Form, Input} from "antd";
import {User, Lock} from "lucide-react";
import React from "react";

export default function AdminLoginPage() {

    const onSubmit = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={"max-w-sm w-full px-8 py-2"}>
            <h1 className={"text-character-secondary"}>SYSTEM ADMIN LOGIN</h1>
            <Divider style={{margin: "4px 0px 16px 0px"}}/>
            <Form
                name="admin_login"
                className="login-form"
                layout={"vertical"}
                onFinish={onSubmit}
                initialValues={{}}>
                <Form.Item
                    name="username"
                    // label={"Username"}
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<User className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>} placeholder="Username: Admin" />
                </Form.Item>
                <Form.Item
                    name="password"
                    // label={"Password"}
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        prefix={<Lock className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button w-full mt-4">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}