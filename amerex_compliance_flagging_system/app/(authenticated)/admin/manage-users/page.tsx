// noinspection SpellCheckingInspection

'use client'
import {BreadcrumbProps, Button, Card, Avatar, List, Skeleton} from "antd"
import SiteHeader from "@/components/siteHeader";
import {UserAddOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useRouter} from "next/navigation";

const breadcrumb: BreadcrumbProps = {
    items: [
        {
            title: <a href="/admin/home">Home</a>,
        //     do note that using full page refresh here with a tag is okay as the app default state is home. if navigating to other pages please use next nagivation router
        },
        {
            title: 'Manage Users',
        },
    ]
};

interface DataType {
    gender?: string;
    name: {
        title?: string;
        first?: string;
        last?: string;
    };
    email?: string;
    picture: {
        large?: string;
        medium?: string;
        thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
}

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default function ManageUserPage() {
    const router = useRouter();
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const [list, setList] = useState<DataType[]>([]);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))),
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                // Resetting window's offsetTop to display react-virtualized demo underfloor.
                // In real scene, you can use public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;

    return (
        <>
            <SiteHeader
                title="Manage Users"
                subTitle="Overview of all the user account in the system"
                breadcrumb={breadcrumb}
                extra={[
                    <Button key={"1"} type={"primary"} onClick={()=>{router.push('/admin/manage-users/create-new-user')}} icon={<UserAddOutlined/>}>Add User</Button>
                ]
                }
            />
            <div className={"p-8 min-h-full flex justify-center items-start"}>
                <Card title="User Account List" bordered={false} className={"w-5/6"}>
                    <p>Card content</p>
                    <List
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item
                                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                            >
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name?.last}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                    <div>content</div>
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        </>
    )
}