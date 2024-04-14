import { observer } from 'mobx-react-lite';
import { useStores } from '../../contexts/root-store-context';
import { LANGUAGE_VERSIONS } from '../../constants/language-versions';
import Select from 'react-select'

import styles from './styles.module.css';
import { useEffect } from 'react';

const LanguageSelector = observer(() => {
    const { codeEditorStore } = useStores();
    const {
        selectedLanguage,
        setSelectedLanguageMobxAction
    } = codeEditorStore;

    const languages = Object.entries(LANGUAGE_VERSIONS);
    const selectOptions = languages.map(([lang, version]) => ({
        value: lang, label: `${lang} (${version})`
    }));

    useEffect(() => {
        console.log('now selectedLanguage', selectedLanguage)
    }, [selectedLanguage]);

    return (
        <div className={styles.languageSelector}>
            <Select
                options={selectOptions}
                defaultValue={selectOptions[0]}
                value={{ label: selectedLanguage, value: selectedLanguage }}
                onChange={option => {
                    if (option) setSelectedLanguageMobxAction(option?.value);
                }}
            />
        </div>
    )
});

export default LanguageSelector;