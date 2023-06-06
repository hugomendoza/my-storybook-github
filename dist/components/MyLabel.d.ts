import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Value corresponding to text label
     */
    label: string;
    /**
     * Sizes for text label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color for text label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Defines value label upper case
     */
    allCaps?: boolean;
    /**
     * Select custom color for text label
     */
    fontColor?: string;
    /**
     * Select background color for text label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
