'use client'

import SiteHeader from "@/components/siteHeader";
import {BreadcrumbProps, Button, Card, Divider, message, Steps, Upload} from "antd";
import type { UploadProps } from 'antd';
import {FileCheck, LayoutList, FolderUp} from "lucide-react";
import {InboxOutlined} from "@ant-design/icons";

const breadcrumb: BreadcrumbProps = {
    items: [
        {
            title: <a href="/home">Home</a>,
            //     do note that using full page refresh here with a tag is okay as the app default state is home. if navigating to other pages please use next nagivation router
        },
        {
            title: 'Upload Message Data',
        },
    ]
};

const { Dragger } = Upload;
const props: UploadProps = {
    name: 'file',
    multiple: false,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export default function UserBrowsePage() {

    return (
        <>
            <SiteHeader
                title={"Upload New Message Data"}
                subTitle={"Upload new message data to the system"}
                breadcrumb={breadcrumb}
            />
            {/*Main Section*/}
            <div className={"p-8 min-h-full flex flex-col justify-start items-center w-full space-y-8"}>
                <div className={"w-3/4 max-w-[800px] min-w-[500px]"}>
                    <Steps className={"w-full"}
                           items={[
                               { title: 'Upload File', status: 'process', icon: <FolderUp />,},
                               { title: 'Pre-scan Review', status: 'wait', icon: <LayoutList />,},
                               { title: 'View Results', status: 'wait', icon: <FileCheck />,}
                           ]}
                    />
                </div>
                <Card title={"Upload File"} bordered={false} className={"min-w-[500px]"}>
                    <p className={"text-sm text-character-secondary mb-4"}>Please upload the raw message data</p>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Please ensure file is in csv and in correct format.
                        </p>
                    </Dragger>
                    <Divider/>
                    <div className={"flex justify-end space-x-4"}>
                        <Button>Cancel</Button>
                        <Button type={"primary"}>Next Step</Button>
                    </div>

                </Card>
            </div>
        </>
    )
}