
import './App.css';
import Button from './components/Button';
import Postlist from './components/Postlist';
import SelectedPost from './components/SelectedPost';


function App() {
  return (
    <div className="App">
      <h1 style={{
        textAlign: 'center'
      }}>React Redux</h1>
      <Button />
      <br></br>
      <Postlist />
      <br></br>
      <SelectedPost />


    </div>
  );
}

export default App;
