'use client'

import {Avatar, BreadcrumbProps, Button, Card, Form, Input, List, Skeleton} from "antd";
import {UserAddOutlined} from "@ant-design/icons";
import SiteHeader from "@/components/siteHeader";
import {useRouter} from "next/navigation";
import {Lock, User} from "lucide-react";
import React, {useState} from "react";

export default function AdminCreateNewUserPage() {
    const router = useRouter();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const breadcrumb: BreadcrumbProps = {
        items: [
            {
                title: <a href="/admin/home">Home</a>,
                //     do note that using full page refresh here with a tag is okay as the app default state is home. if navigating to other pages please use next nagivation router
            },
            {
                title:  <p onClick={()=>{router.push('/admin/manage-users')}}>Manage Users</p>,
                path: '/admin/manage-users'
            },
            {
                title: 'Create New User',
            }
        ]
    };
    const handleRegisterSubmit = (values: any) => {
        setConfirmLoading(true);
        console.log('Received values of form: ', values);
    }

    return (
        <>
            <SiteHeader
                title="Create New User Account"
                subTitle="Manually create a new user level accounts in the system"
                breadcrumb={breadcrumb}
            />
            <div className={"p-8 min-h-full flex justify-center items-start"}>
                <Card title="Create New User Account" bordered={false} className={"w-5/6 max-w-[800px]"}>
                    <p className={"text-sm text-character-secondary"}>Fill in the required account details.</p>
                    <Form
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
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button w-full mt-8">
                                Create Account
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    )
}