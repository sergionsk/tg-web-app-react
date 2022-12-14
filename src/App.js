import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, [])
  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      
      <h1 >It worked!</h1>
      <button onClick={onClose}>Закрыть</button>
   
      
    </div>
  );
}

export default App;
