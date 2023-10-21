'use client';
import {Button, Divider, Form, Input, Modal} from "antd";
import {User, Lock} from "lucide-react";
import React, {useState} from "react";
import Link from "next/link";

export default function UserLoginPage() {
    const [openPasswordResetModal, setOpenPasswordResetModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // Declaring forms to be used in modals
    const [passwordResetForm] = Form.useForm();
    const [registerForm] = Form.useForm();

    const handlePasswordResetSubmit = (values: any) => {
        setConfirmLoading(true);

        console.log('Received values of form: ', values);
        setTimeout(() => {
            setOpenPasswordResetModal(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleRegisterSubmit = (values: any) => {
        setConfirmLoading(true);
        console.log('Received values of form: ', values);
        setTimeout(() => {
            setOpenRegisterModal(false);
            setConfirmLoading(false);
        }, 2000);
    }

    const onLogin = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={"max-w-sm w-full px-8 py-2"}>
            <h1 className={"text-character-secondary"}>Login</h1>
            <Divider style={{margin: "4px 0px 16px 0px"}}/>
            <Form
                name="user_login"
                className="login-form"
                layout={"vertical"}
                onFinish={onLogin}
                initialValues={{}}>
                <Form.Item
                    name="username"
                    // label={"Username"}
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<User className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>} placeholder="Username: User" />
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
                <Button onClick={()=>{setOpenPasswordResetModal(true)}} type={"link"} size={"small"} style={{fontSize: 14}}>Forgot your password?</Button>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button w-full mt-8">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>

            <p className={"text-sm w-full text-center mt-16"}>{`Don't have an account?`}
                <Button onClick={()=>{setOpenRegisterModal(true)}} type={"link"} size={"small"} style={{fontSize: 14}}>Request for one.</Button>
            </p>

            {/*Forget Password Modal*/}
            <Modal
                title="Submit a password reset request."
                open={openPasswordResetModal}
                centered
                confirmLoading={confirmLoading}
                onCancel={() => setOpenPasswordResetModal(false)}
                footer={[
                    <Button key="back" onClick={() => setOpenPasswordResetModal(false)}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" htmlType={"submit"} loading={confirmLoading} onClick={passwordResetForm.submit}>
                        Request
                    </Button>
                ]}
            >
                <p className={"text-sm text-character-secondary pb-4"}>Enter in your username and submit a request to reset your password to the system administrator. Only 1 request allowed.</p>
                <Form
                    id = "rest_password_form"
                    form = {passwordResetForm}
                    name="rest_password_form"
                    onFinish={handlePasswordResetSubmit}
                    layout={"vertical"}>
                    <Form.Item
                        name="username"
                        label={"Username"}
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<User className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>} placeholder="Username: User" />
                    </Form.Item>
                </Form>
            </Modal>

            {/*Register Account Modal*/}
            <Modal
                title="Submit an account registration request."
                open={openRegisterModal}
                centered
                onCancel={() => setOpenRegisterModal(false)}
                confirmLoading={confirmLoading}
                footer={[
                    <Button key="back" onClick={() => setOpenRegisterModal(false)}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={confirmLoading} onClick={registerForm.submit}>
                        Request
                    </Button>
                ]}
            >
                <p className={"text-sm text-character-secondary pb-4"}>Fill in the required account details.</p>
                <Form
                    form = {registerForm}
                    layout={"vertical"}
                    onFinish={handleRegisterSubmit}>
                    <Form.Item
                        name="fullname"
                        label={"Full name"}
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                    >
                        <Input prefix={<User className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>} placeholder="Full name" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label={"Username"}
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<User className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>} placeholder="Username: User" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label={"Password"}
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password prefix={<Lock className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>} placeholder="Input Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input prefix={<Lock className={"p-0.5 mr-2 text-character-disabledOrPlaceholder"}/>} placeholder="Confirm Password"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}