import { useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../contexts/root-store-context';
import { EditorRefType, OnMountType } from './model';

import styles from './styles.module.css';

const CodeEditor = observer(() => {
    const { codeEditorStore: { codeEditorsValue, setCodeEditorsValueMobxAction } } = useStores();
    const editorRef = useRef<EditorRefType>();

    const onMount = (editor: OnMountType) => {
        editorRef.current = editor;
        editor.focus();
    }

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
                onMount={onMount}
            />
        </div>
    )
});

export default CodeEditor;