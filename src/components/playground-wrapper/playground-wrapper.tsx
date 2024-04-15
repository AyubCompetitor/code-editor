import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';

import styles from './styles.module.css';

interface PlaygroundWrapperProps {
    children: ReactNode;
}

const PlaygroundWrapper = observer(({ children }: PlaygroundWrapperProps) => {
    return (
        <div className={styles.playgroundWrapper}>
            {children}
        </div>
    )
})

export default PlaygroundWrapper;