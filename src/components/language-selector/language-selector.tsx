import { observer } from 'mobx-react-lite';
import { useStores } from '../../contexts/root-store-context';
import { LANGUAGE_VERSIONS } from '../../constants/language-versions';
import Select from 'react-select'

import './styles.css';

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

    return (
        <Select
            className="language-selector-container"
            classNamePrefix="language-selector"
            options={selectOptions}
            defaultValue={selectOptions[0]}
            value={{ label: selectedLanguage, value: selectedLanguage }}
            onChange={option => {
                if (option) setSelectedLanguageMobxAction(option?.value);
            }}
        />
    )
});

export default LanguageSelector;