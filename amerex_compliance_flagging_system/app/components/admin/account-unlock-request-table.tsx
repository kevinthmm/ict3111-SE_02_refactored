import React from 'react';
import {Button, Space, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    userId: string;
    lockReason: string;
    requestDateTimestamp: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: 'Lock Reason',
        dataIndex: 'lockReason',
        key: 'lockReason',
    },
    {
        title: 'Requested On',
        dataIndex: 'requestDateTimestamp',
        key: 'requestDateTimestamp',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button size={"small"}><p className={"text-sm"}>Approve</p></Button>
                <Button size={"small"}><p className={"text-sm"}>Deny</p></Button>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        userId: 'johndoe',
        lockReason: 'New Account',
        requestDateTimestamp: '2021-10-01 12:00:00',
    },
    {
        key: '2',
        name: 'Jim Green',
        userId: 'jimmygreen',
        lockReason: 'Administrative Lock',
        requestDateTimestamp: '2021-10-01 12:00:00',
    },
    {
        key: '3',
        name: 'Jim Blue',
        userId: 'tanner98',
        lockReason: 'Administrative Lock',
        requestDateTimestamp: '2021-10-01 12:00:00',
    },
];

const AccountUnlockRequestTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default AccountUnlockRequestTable;