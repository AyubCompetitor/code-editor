export type Option = {
    value: string;
    label: string;
};

export interface CustomSelectProps {
    value: string,
    defaultValue: Option,
    onChangeHandler: (option: Option | string) => void;
    options: Option[];
}
