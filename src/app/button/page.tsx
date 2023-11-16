"use client";

import React from 'react';
import CustomButton, { CustomButtonProps } from './CustomButton';

export default function ButtonAntd() {
    let buttonProps: CustomButtonProps = {
        type: "primary",
        size: 'middle',
        title: 'Custom button title',
        isDanger: false,
        onClick: () => {
            console.log("btn clicked");
        }
    };

    return (
        <CustomButton {...buttonProps} ></CustomButton>
    );
};