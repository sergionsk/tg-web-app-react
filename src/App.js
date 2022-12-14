import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    tg.ready();
  }, [])
  
  
  return (
    <div className="App">
      
      <h1 >Это работает!</h1>
      <button onClick={onClose}>Закрыть</button>
   
      
    </div>
  );
}

export default App;
