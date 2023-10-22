// noinspection SpellCheckingInspection

'use client'
import React, { useState } from 'react';
import {Avatar, Button, Divider, Dropdown, Layout, Menu, theme} from 'antd';
import {Home, UserCog, FileText, ClipboardEdit, Upload, PanelLeftOpen, PanelRightOpen, LogOut} from 'lucide-react'
import { UserOutlined } from '@ant-design/icons';
import Image from "next/image";
import {useRouter} from "next/navigation";


const { Header, Content, Sider } = Layout;

function TopbarWithMenuUser({children,}: { children: React.ReactNode }){
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState((1));
    const {} = theme.useToken();

    return (
        <Layout className={"w-screen"} style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Image className={collapsed ? 'p-4': 'hidden'} src={"/Logo White Logo Only.png"} width={396} height={330} alt={"Amerex Petroleum Logo Only"}/>
                <Image className={collapsed ? 'hidden': 'my-4'} src={"/logoAmerexWhite.svg"} width={396} height={330} alt={"Amerex Petroleum Logo Full"}/>
                <Divider style={{margin: "4px"}}/>
                <Menu theme="dark"
                      defaultSelectedKeys={[selectedKey.toString()]}
                      mode="inline"
                      // items={items}
                >
                    <Menu.Item icon={<Home />} key={1} onClick={()=>{
                        setSelectedKey(1);
                        router.push('/home')}}>
                        Home
                    </Menu.Item>
                    <Menu.Item icon={<FileText />} key={2} style={{whiteSpace: 'normal', height: 'auto', padding: '12px'}} onClick={()=>{
                        setSelectedKey(2)
                        router.push('/message-records')}
                    }>
                        <p className={collapsed ? 'hidden': 'text-sm'}>Browse Message Records</p>
                    </Menu.Item>
                    <Menu.Item icon={<ClipboardEdit />} key={3} style={{whiteSpace: 'normal', height: 'auto', padding: '12px'}} onClick={()=>{
                        setSelectedKey(3)
                        router.push('/manage-message-records')}
                    }>
                        <p className={collapsed ? 'hidden': 'text-sm'}>Manage Message Records</p>
                    </Menu.Item>
                    <Menu.Item icon={<Upload />} key={4} style={{whiteSpace: 'normal', height: 'auto', padding: '12px'}} onClick={()=>{
                        setSelectedKey(4)
                        router.push('/upload-message-data')}
                    }>
                        <p className={collapsed ? 'hidden': 'text-sm'}>Upload New Message Data</p>
                    </Menu.Item>
                </Menu>

            </Sider>
            <Layout>
                <Header className={"w-full flex items-center justify-between"} style={{ padding: 0, background: "white" }}>
                    <Button
                        type="text"
                        icon={collapsed ? <PanelLeftOpen className={"text-character-secondary"}/> : <PanelRightOpen />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />

                    <Dropdown placement="bottomRight" arrow className={"mr-8 text-sm"} menu={{ items: [
                            { label: 'Edit Profile', key: '1', icon:<UserCog/>},
                            { label: 'Logout', key: '2', icon:<LogOut/>, onClick: () => {router.push('/login')}},
                        ]}}>
                        <div className={"flex items-center justify-center space-x-2"}>
                            <Avatar className={"flex items-center justify-center"} style={{ backgroundColor: 'gray' }} icon={<UserOutlined/>} />
                            <p className={"text-sm uppercase text-character-primary"}>
                                Thomas Edison
                            </p>
                        </div>
                    </Dropdown>
                </Header>
                <Content className={"flex flex-col"}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default TopbarWithMenuUser;