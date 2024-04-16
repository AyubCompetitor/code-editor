import CodeEditorStore from "./code-editor-store";
import OutputStore from "./output-store";
import RuntimesStore from "./runtimes-store";
import ThemesStore from "./themes-store";

class RootStore {
    codeEditorStore = new CodeEditorStore();
    runtimesStore = new RuntimesStore();
    outputStore = new OutputStore(this.codeEditorStore, this.runtimesStore);
    themesStore = new ThemesStore();
}

export default RootStore;