import { PlaygroundWrapper } from './components/widgets/playground-wrapper';
import { RootStoreContext } from './contexts/root-store-context';
import { Output } from './components/widgets/output';
import { CodeEditor } from './components/widgets/code-editor';
import RootStore from './stores/root-store'

import './App.css'

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
