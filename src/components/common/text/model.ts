export enum Ecolors {
    black = 'black',
    orange = 'orange',
    green = 'green',
    white = 'white',
    greyF4 = 'greyF4',
    greyF3 = 'greyF3',
    greyD9 = 'greyD9',
    greyC4 = 'greyC4',
    grey99 = 'grey99',
    grey66 = 'grey66',
    default = 'default',
}

export type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

export interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div',
    children?: React.ReactNode,
    size: Tsizes,
    color?: Ecolors,
    bold?: boolean;
}