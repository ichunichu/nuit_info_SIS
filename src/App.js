import './App.css';
import { Un } from './components/Un';
import { Deux } from './components/Deux';
import { useState } from 'react';





function App() {
  const [page,setPage] = useState("un")
  const router = {
    "un":{
      "component":<Un setPage={setPage}/>
    },
    "deux":{
      "component": <Deux setPage={setPage}/>
    }
  }
  console.log(router[page]);
  return (
    <>
    
    {router[page].component}
    </>
  );
}

export default App;
