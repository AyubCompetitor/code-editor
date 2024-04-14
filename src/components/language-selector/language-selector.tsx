import { observer } from 'mobx-react-lite';
// import { useStores } from '../../contexts/root-store-context';
import Select from 'react-select'
import { LANGUAGE_VERSIONS } from '../../constants/language-versions';

import styles from './styles.module.css';


const LanguageSelector = observer(() => {
    // const { } = useStores();
    const languages = Object.entries(LANGUAGE_VERSIONS);
    const selectOptions = languages.map(([lang, version]) => ({
        value: lang, label: `${lang} (${version})`
    }));

    return (
        <div className={styles.languageSelector}>
            <Select
                options={selectOptions}
                defaultValue={selectOptions[0]}
            />
        </div>
    )
});

export default LanguageSelector;