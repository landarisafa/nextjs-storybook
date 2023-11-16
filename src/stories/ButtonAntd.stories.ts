import CustomButton from '../app/button/CustomButton';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Training/ButtonAntd',
    component: CustomButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        //   backgroundColor: { control: 'color' },
        type: { control: 'select', options: ["link", "text", "default", "primary", "dashed", undefined] },
        size: { control: 'radio', options: ['small', 'middle', 'large', undefined] },
        //onClickBtn: { action: 'clicked' }
    },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        type: "default",
        size: 'middle',
        title: "Default button",
        isDanger: false
    },
};

export const Primary: Story = {
    args: {
        type: "primary",
        size: 'middle',
        title: "Primary button",
        isDanger: false
    },
};

export const Dashed: Story = {
    args: {
        type: "dashed",
        size: 'middle',
        title: "Dashed button",
        isDanger: false
    },
};

export const Danger: Story = {
    args: {
        type: "primary",
        size: 'middle',
        title: "Danger button",
        isDanger: true
    },
};

