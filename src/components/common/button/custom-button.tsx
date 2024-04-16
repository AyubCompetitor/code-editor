import cn from 'classnames';
import { CustomButtonProps } from './model';

import styles from './styles.module.css';

const CustomButton = ({ className, onClick, children }: CustomButtonProps) => {

    return (
        <button className={cn(styles.customButton, className)} onClick={onClick}>{children}</button>

    )
};

export default CustomButton;