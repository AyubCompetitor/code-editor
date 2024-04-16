import { observer } from 'mobx-react-lite';
import { useStores } from '../../../contexts/root-store-context';
import { uniqueId } from 'lodash';
import { CustomButton } from '../../common/button';
import { Text } from '../../common/text';
import { Ecolors } from '../../common/text/model';


import styles from './styles.module.css';

const Output = observer(() => {
    const { outputStore, themesStore: { isDarkMode } } = useStores();
    const { output, runCodeMobxAction } = outputStore;

    return (
        <div className={styles.outputWrapper}>
            <div className={styles.outputHeader}>

                <CustomButton className={styles.outputButton} onClick={runCodeMobxAction}>Run Code</CustomButton>
            </div>
            <div className={styles.output}>
                {
                    output.map((line) => <Text size={20} As='p' color={isDarkMode ? Ecolors.default : Ecolors.black} key={uniqueId()}>{line}</Text>)
                }
            </div>
        </div>
    )
});

export default Output;