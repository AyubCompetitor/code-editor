import { makeAutoObservable } from "mobx";
import CodeEditorStore from "./code-editor-store";
import { executeCode } from "../api/api";

class OutputStore {
    codeEditorStore;

    output = [];
    isLoading = false;
    isError = false;

    constructor(codeEditorStore: CodeEditorStore) {
        this.codeEditorStore = codeEditorStore;
        makeAutoObservable(this);
    }

    runCodeMobxAction = async () => {
        const sourceCode = this.codeEditorStore.codeEditorsValue;
        const selectedLanguage = this.codeEditorStore.selectedLanguage;

        if (!sourceCode) return;
        try {
            this.isLoading = true;
            const { run: result } = await executeCode(selectedLanguage, sourceCode);
            this.output = result.output.split("\n");
            result.stderr ? this.isError = true : this.isError = false;
        } catch (error) {
            console.log(error);
        } finally {
            this.isLoading = false;
        }
    };
}

export default OutputStore;