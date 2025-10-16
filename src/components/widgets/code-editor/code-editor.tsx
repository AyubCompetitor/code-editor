import cn from 'classnames';
import { Editor } from '@monaco-editor/react';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { useStores } from '../../../contexts/root-store-context';
import { EditorRefType, OnMountType } from './model';
import { LanguageSelector } from '../language-selector';
import { CustomButton } from '../../common/button';

import styles from './styles.module.css';

const CodeEditor = observer(() => {
    const editorRef = useRef<EditorRefType>();

    const { codeEditorStore, themesStore } = useStores();
    const { codeEditorsValue, selectedLanguage, setCodeEditorsValueMobxAction } = codeEditorStore;
    const { isDarkMode, toggleThemeMobxAction } = themesStore;

    const computeEdidorClassname = isDarkMode ? styles.codeEditor : styles.codeEditorLight;
    const computeLanguageSelectorTheme = isDarkMode ? styles.languageSelectorDark : styles.languageSelectorLight;

    const onMount = (editor: OnMountType) => {
        editorRef.current = editor;
        editor.focus();
    }

    return (
        <div className={styles.codeEditorWrapper}>
            <div className={cn(styles.editorHeader, computeLanguageSelectorTheme)}>
                <LanguageSelector />
                <CustomButton onClick={toggleThemeMobxAction}>Toggle Theme</CustomButton>
            </div>
            <Editor
                className={computeEdidorClassname}
                height="100%"
                theme={isDarkMode ? 'vs-dark' : 'light'}
                defaultLanguage={selectedLanguage}
                language={selectedLanguage}
                defaultValue="# гоу кодить"
                value={codeEditorsValue}
                onChange={setCodeEditorsValueMobxAction}
                onMount={onMount}
            />
        </div >
    )
});

export default CodeEditor;
