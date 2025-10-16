import { makeAutoObservable } from "mobx";
// runInAction
class CodeEditorStore {

    codeEditorsValue = '';
    selectedLanguage = 'javascript'

    constructor() {
        makeAutoObservable(this);
    }

    setCodeEditorsValueMobxAction = (value: unknown) => {
        this.codeEditorsValue = typeof value === 'string' ? value : String(value);
    }

    setSelectedLanguageMobxAction = (language: string) => {
        this.selectedLanguage = language;
    };
}

export default CodeEditorStore;
