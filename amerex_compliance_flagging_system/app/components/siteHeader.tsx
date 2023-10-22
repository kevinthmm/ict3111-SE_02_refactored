'use client'
import React from 'react';
import {BreadcrumbProps} from "antd";
import { PageHeader } from '@ant-design/pro-components';

interface SiteHeaderProps {
    title: string;
    subTitle: string;
    breadcrumb?: BreadcrumbProps;
    extra?: React.ReactNode[];
    backIcon?: React.ReactNode;
    footer?: React.ReactNode;
}

function SiteHeader({ title, subTitle, breadcrumb, extra , backIcon, footer}: SiteHeaderProps){
    return (
        <PageHeader
            style={{backgroundColor: "white"}}
            title={title}
            subTitle={subTitle}
            breadcrumb={
                breadcrumb
            }
            extra={extra}
            backIcon={backIcon}
            footer={footer}
        />
    )
}

export default SiteHeader;