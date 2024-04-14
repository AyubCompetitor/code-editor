import { observer } from 'mobx-react-lite';
import { PlaygroundWrapperProps } from './model';

import styles from './styles.module.css';

const PlaygroundWrapper = observer(({ children }: PlaygroundWrapperProps) => {
    return (
        <div className={styles.playgroundWrapper}>
            {children}
        </div>
    )
})

export default PlaygroundWrapper;