import { useEffect, useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../contexts/root-store-context';
import { EditorRefType, OnMountType } from './model';


import styles from './styles.module.css';
import { LanguageSelector } from '../language-selector';

const CodeEditor = observer(() => {
    const { codeEditorStore } = useStores();
    const { codeEditorsValue, setCodeEditorsValueMobxAction, selectedLanguage } = codeEditorStore;

    const editorRef = useRef<EditorRefType>();

    const onMount = (editor: OnMountType) => {
        editorRef.current = editor;
        editor.focus();
    }

    return (
        <div className={styles.codeEditorWrapper}>
            <LanguageSelector />
            <Editor
                className={styles.codeEditor}
                height="100%"
                theme='vs-dark'
                defaultLanguage={selectedLanguage}
                language={selectedLanguage}
                defaultValue="// Начните писать ваш код здесь"
                value={codeEditorsValue}
                onChange={(value) => setCodeEditorsValueMobxAction(value as string)}
                onMount={onMount}
            />
        </div>
    )
});

export default CodeEditor;