import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      App
      <button onClick={() => dispatch({ type: 'LOAD_DATA' })}>Click</button>
    </div>
  );
}

export default App;
