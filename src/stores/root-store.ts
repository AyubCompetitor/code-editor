import CodeEditorStore from "./code-editor-store";
import OutputStore from "./output-store";

class RootStore {
    codeEditorStore = new CodeEditorStore();
    outputStore = new OutputStore(this.codeEditorStore);
}

export default RootStore;