import classNames from "classnames";
import styles from './styles.module.css';
import { Ecolors, ITextProps } from "./model";

const Text = ({
    As = 'span',
    size = 20,
    color = Ecolors.default,
    bold = false,
    children,
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