import './App.css'
import CodeEditor from './components/code-editor/code-editor';
import PlaygroundWrapper from './components/playground-wrapper/playground-wrapper';
import RootStore from './stores/root-store'
import { RootStoreContext } from './contexts/root-store-context';

function App() {
  const rootStore = new RootStore();

  return (
    <>
      <RootStoreContext.Provider value={rootStore}>
        <PlaygroundWrapper>
          <CodeEditor />
        </PlaygroundWrapper>
      </RootStoreContext.Provider>
    </>
  )
}

export default App;
