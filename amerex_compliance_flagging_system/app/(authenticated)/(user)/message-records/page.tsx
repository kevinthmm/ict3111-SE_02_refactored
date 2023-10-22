'use client'

import SiteHeader from "@/components/siteHeader";
import {BreadcrumbProps, Card} from "antd";
import AccountUnlockRequestTable from "@/components/admin/account-unlock-request-table";

const breadcrumb: BreadcrumbProps = {
    items: [
        {
            title: <a href="/home">Home</a>,
            //     do note that using full page refresh here with a tag is okay as the app default state is home. if navigating to other pages please use next nagivation router
        },
        {
            title: 'Browse Message Records',
        },
    ]
};

export default function UserBrowsePage() {

    return (
        <>
            <SiteHeader
                title={"All Message Records"}
                subTitle={"Showing all message records stored on the system for the selected month and year"}
                breadcrumb={breadcrumb}
            />
            {/*Main Section*/}
            <div className={"p-8 min-h-full flex flex-col justify-start items-center w-full space-y-8"}>
                {/*Statistics Section*/}
                <div className={"flex justify-between space-x-4 w-full"}>
                    <Card bordered={false} className={"w-5/6"}>
                        <p>Statistics</p>
                    </Card>
                    <Card bordered={false} className={"w-5/6"}>
                        <p>Statistics</p>
                    </Card>
                    <Card bordered={false} className={"w-5/6"}>
                        <p>Statistics</p>
                    </Card>
                </div>
                {/*Table Section*/}
                <AccountUnlockRequestTable/>
            </div>
        </>
    )
}