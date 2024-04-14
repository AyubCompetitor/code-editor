import { makeAutoObservable } from "mobx";
// runInAction
class CodeEditorStore {

    codeEditorsValue = '';
    selectedLanguage = 'javascript'

    constructor() {
        makeAutoObservable(this);
    }

    setCodeEditorsValueMobxAction(value: string) {
        this.codeEditorsValue = value;
    }

    setSelectedLanguageMobxAction = (language: string) => {
        this.selectedLanguage = language;
    };
}

export default CodeEditorStore;