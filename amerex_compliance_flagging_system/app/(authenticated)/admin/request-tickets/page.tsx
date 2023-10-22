'use client'

import SiteHeader from "@/components/siteHeader";
import {BreadcrumbProps, Card, Tabs} from "antd";
import {ChevronLeft} from "lucide-react";
import AccountUnlockRequestTable from "@/components/admin/account-unlock-request-table";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

export default function AdminRequestTicketPage() {
    const breadcrumb: BreadcrumbProps = {
        items: [
            {
                title: <a href="/admin/home">Home</a>,
                //     do note that using full page refresh here with a tag is okay as the app default state is home. if navigating to other pages please use next nagivation router
            },
            {
                title: 'Request Tickets'
            },
        ]
    };

    const onTabChange = (key: string) => {
        console.log(key);
    };

    return (
        <>
            <SiteHeader
                title="Request Tickets"
                subTitle="Displaying all request tickets submitted"
                breadcrumb={breadcrumb}
                backIcon={<ChevronLeft/>}
                footer = {
                    <Tabs defaultActiveKey="1" items={[
                        {
                            key: '1',
                            label: 'Account Unlock Request',
                            // children: <div>Content of Tab 1</div>,
                        },
                        {
                            key: '2',
                            label: 'Password Reset Request',
                            // children: <div>Content of Tab 2</div>,
                        },
                    ]} onChange={onTabChange} />
                }
            />

            <div className={"w-full min-h-full flex items-start justify-center p-8"}>
                {/*Account Unlock Request Card*/}
                <Card title={"Table of account unlock request tickets"} className={"min-w-full"}>
                    <AccountUnlockRequestTable/>
                </Card>
            </div>
        </>
    )
}