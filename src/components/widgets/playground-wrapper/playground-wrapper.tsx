import cn from 'classnames';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { PlaygroundWrapperProps } from './model';
import { useStores } from '../../../contexts/root-store-context';


import styles from './styles.module.css';

const PlaygroundWrapper = observer(({ children }: PlaygroundWrapperProps) => {
    const { runtimesStore: { getRuntimesMobxAction }, themesStore: { isDarkMode } } = useStores();
    const computePlaygroundTheme = isDarkMode ? styles.playgroundWrapperDarkTheme : styles.playgroundWrapperLigthTheme;

    useEffect(() => {
        getRuntimesMobxAction()
    }, []);

    return (
        <div className={cn(styles.playgroundWrapper, computePlaygroundTheme)}>
            {children}
        </div >
    )
})

export default PlaygroundWrapper;