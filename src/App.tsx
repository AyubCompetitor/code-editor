import './App.css'
import CodeEditor from './components/code-editor/code-editor';
import PlaygroundWrapper from './components/playground-wrapper/playground-wrapper';
import RootStore from './stores/root-store'
import { RootStoreContext } from './contexts/root-store-context';
import { Output } from './components/output';

function App() {
  const rootStore = new RootStore();

  return (
    <>
      <RootStoreContext.Provider value={rootStore}>
        <PlaygroundWrapper>
          <CodeEditor />
          <Output />
        </PlaygroundWrapper>
      </RootStoreContext.Provider>
    </>
  )
}

export default App;
