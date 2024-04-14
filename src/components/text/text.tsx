import classNames from "classnames";
import styles from './styles.module.css';
import { Ecolors, ITextProps } from "./model";

const Text = ({
    As = 'span',
    color = Ecolors.black,
    bold = false,
    children,
    size = 12,
}: ITextProps) => {
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles.bold]: bold },
    );

    return (
        <As className={classes}>
            {children}
        </As>
    )
}

export default Text;