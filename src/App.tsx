import './App.css'
import CodeEditor from './components/code-editor/CodeEditor';
import PlaygroundWrapper from './components/playground-wrapper/PlaygroundWrapper';
import { RootStoreContext } from './contexts/root-store-context'
import RootStore from './stores/root-store'

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

export default App
