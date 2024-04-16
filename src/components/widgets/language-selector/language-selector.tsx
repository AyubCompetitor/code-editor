import { observer } from 'mobx-react-lite';
import { useStores } from '../../../contexts/root-store-context';
import { CustomSelect } from '../../common/select';

import './styles.css';

const LanguageSelector = observer(() => {
    const { codeEditorStore, runtimesStore } = useStores();

    const { selectedLanguage, setSelectedLanguageMobxAction } = codeEditorStore;
    const { runtimes } = runtimesStore;

    const languages = Object.entries(runtimes);
    const languagesAsOptionsTransformed = languages.map(([lang, version]) => ({
        value: lang, label: `${lang} (${version})`
    }));

    return (
        <CustomSelect
            options={languagesAsOptionsTransformed}
            defaultValue={languagesAsOptionsTransformed[0]}
            value={selectedLanguage}
            onChangeHandler={setSelectedLanguageMobxAction as () => void}
        />
    )
});

export default LanguageSelector;