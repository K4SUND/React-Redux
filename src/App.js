
import './App.css';
import UseEffectHook from './hooks/UseEffectHook.js';
import UseRefHook from './hooks/UseRefHook.js';
import UseStateHook from './hooks/UseStateHook.js';
// import FileUpload from './FileUpload';

function App() {
  return (
    <div className="App">
      {/* <FileUpload/> */}
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      <UseRefHook/>

    </div>
  );
}

export default App;
