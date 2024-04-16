import { makeAutoObservable } from "mobx";
import { executeCode } from "../api/api";
import RuntimesStore from "./runtimes-store";
import CodeEditorStore from "./code-editor-store";

class OutputStore {
    codeEditorStore;
    runtimesStore;

    output = ['Click "Run Code" to see the output here'];
    isLoading = false;
    isError = false;

    constructor(codeEditorStore: CodeEditorStore, runtimesStore: RuntimesStore) {
        this.codeEditorStore = codeEditorStore;
        this.runtimesStore = runtimesStore;
        makeAutoObservable(this);
    }

    runCodeMobxAction = async () => {
        const sourceCode = this.codeEditorStore.codeEditorsValue;
        const selectedLanguage = this.codeEditorStore.selectedLanguage;
        const runtimes = this.runtimesStore.runtimes;

        if (!sourceCode) return;
        try {
            this.isLoading = true;
            const { run: result } = await executeCode(selectedLanguage, sourceCode, runtimes);
            this.output = result.output.split("\n");
            result.stderr ? this.isError = true : this.isError = false;
        } catch (error) {
            console.log('No response was received requesting code execution', error);
        } finally {
            this.isLoading = false;
        }
    };
}

export default OutputStore;