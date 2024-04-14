import { makeAutoObservable } from "mobx";
// runInAction
class CodeEditorStore {

    codeEditorsValue = '';

    constructor() {
        makeAutoObservable(this);
    }

    setCodeEditorsValueMobxAction(value: string) {
        this.codeEditorsValue = value;
    }
}

export default CodeEditorStore;