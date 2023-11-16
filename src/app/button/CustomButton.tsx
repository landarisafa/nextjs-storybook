"use client";

import React from 'react';
import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

export interface CustomButtonProps {
    size: SizeType;
    type: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    title: string;
    isDanger: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export default function CustomButton({ size, type, title, isDanger, onClick }: CustomButtonProps) {

    // const onClick = () => {
    //     console.log("btn clicked");
    // }

    return (
        // <Button type="primary">Primary</Button> icon={<DownloadOutlined />}
        <Button type={type} size={size} danger={isDanger} onClick={onClick}>
            {title}
        </Button>
    );
};