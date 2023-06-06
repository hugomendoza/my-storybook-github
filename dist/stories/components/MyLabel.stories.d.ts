import { StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";
declare const _default: {
    title: string;
    component: ({ label, size, color, allCaps, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
        backgroundColor: {
            control: string;
        };
    };
};
export default _default;
type Story = StoryObj<typeof MyLabel>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomFontColor: Story;
export declare const CustomBackgroundColor: Story;
