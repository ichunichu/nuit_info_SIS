import './App.css';

import { Index } from "./components/Index";
import { useState } from 'react';
import {Helmet} from "react-helmet";
import { Contact } from './components/Contact';
import {Jeu} from "./components/Jeu";






function App() {
  const [page,setPage] = useState("index")
  const router = {
    "index":{
      "component":<Index setPage={setPage}/>
    },
    "jeu":{
      "component":<Jeu setPage={setPage}/>
    },
    "contact":{
      "component": <Contact setPage={setPage}/>
    },

  }
  console.log(router[page]);
  return (

    <>
      <Helmet>
        <title>My Title</title>
      </Helmet>
    
      {router[page].component}
    </>
  );
}

export default App;
