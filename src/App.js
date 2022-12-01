import './App.css';
import { Un } from './components/pages/Un';
import { Deux } from './components/pages/Deux';
import { Index } from "./components/Index";
import { useState } from 'react';





function App() {
  const [page,setPage] = useState("un")
  const router = {
    "index":{
      "component":<Index setPage={setPage}/>
    },
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
