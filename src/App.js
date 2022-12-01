import './App.css';
import { Index } from "./components/Index";
import { useState } from 'react';
import {Helmet} from "react-helmet";
import {Jeu} from "./components/Jeu";





function App() {
  const [page,setPage] = useState("jeu")
  const router = {
    "index":{
      "component":<Index setPage={setPage}/>
    },
    "jeu":{
      "component":<Jeu/>
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
