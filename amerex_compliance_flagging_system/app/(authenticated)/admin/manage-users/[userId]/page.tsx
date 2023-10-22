'use client'

import {BreadcrumbProps, Button, Card, Divider, Form, Input, Statistic, Badge, Descriptions} from "antd";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import SiteHeader from "@/components/siteHeader";
import {Lock, User} from "lucide-react";

export default function Page({ params }: { params: { userId: string } }) {
    const router = useRouter();
    const [confirmLoading, setConfirmLoading] = useState(false);

    const breadcrumb: BreadcrumbProps = {
        items: [
            {
                title: <a href="/admin/home">Home</a>,
                //     do note that using full page refresh here with a tag is okay as the app default state is home. if navigating to other pages please use next navigation router
            },
            {
                title:  <p onClick={()=>{router.push('/admin/manage-users')}}>Manage Users</p>,
                path: '/admin/manage-users'
            },
            {
                title: 'User Account Details',
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
                title={params.userId}
                subTitle={params.userId}
                breadcrumb={breadcrumb}
                extra={[
                    <Statistic key={"1"} title={<Badge status="success" text="Account Status" />} value={"Active / Locked"} />
                ]}
            />

            <div className={"p-8 min-h-full flex justify-center items-start"}>
                <Card title="Account Details" bordered={false} className={"w-5/6 max-w-[800px]"}>
                    <p className={"text-sm text-character-secondary mb-8"}>Fill in the required account details.</p>
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
                                Update Account
                            </Button>
                        </Form.Item>
                    </Form>
                    <Divider/>
                    <Descriptions title="User Info" layout={"vertical"} bordered items={[
                        { key: '1', label:'Account Unlock Request', children:<Badge status="processing" text="No Requests" />,},
                        { key: '2', label:'Password Reset Request', children:<Badge status="error" text="Requested" />}
                    ]} />
                    <div className={"flex flex-col space-y-4 mt-8"}>
                        <Button danger>Lock Account</Button>
                        <Button type={'primary'} danger>Delete Account</Button>
                    </div>
                </Card>
            </div>
        </>

    )
}