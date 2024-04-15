import { observer } from 'mobx-react-lite';
import { useStores } from '../../contexts/root-store-context';

import styles from './styles.module.css';
import { Text } from '../text';
import { uniqueId } from 'lodash';

const Output = observer(() => {
    const { outputStore } = useStores();
    const { output, runCodeMobxAction } = outputStore;

    return (
        <div className={styles.outputWrapper}>
            <button className={styles.outputButton} onClick={runCodeMobxAction}>Run Code</button>
            <div className={styles.output}>
                {
                    output
                        ? output.map((line) => <Text size={20} As='p' key={uniqueId()}>{line}</Text>)
                        : 'Click "Run Code" to see the output here'
                }
            </div>
        </div>
    )
});

export default Output;