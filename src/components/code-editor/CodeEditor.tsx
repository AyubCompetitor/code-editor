import { Editor } from '@monaco-editor/react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../contexts/root-store-context';

import styles from './styles.module.css';

const CodeEditor = observer(() => {
    const { codeEditorStore: { codeEditorsValue, setCodeEditorsValueMobxAction } } = useStores();


    return (
        <div className={styles.codeEditor}>
            <button onClick={() => console.log(codeEditorsValue)}>button</button>
            <Editor
                height="100%"
                theme='vs-dark'
                defaultLanguage="javascript"
                defaultValue="// Начните писать ваш код здесь"
                value={codeEditorsValue}
                onChange={(value) => setCodeEditorsValueMobxAction(value || '')}
            />
        </div>
    )
});

export default CodeEditor;