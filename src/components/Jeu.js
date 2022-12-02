import "./jeu.css";
import {Un} from "./pages/Un";
import {Deux} from "./pages/Deux";
import {useState} from "react";

export function Jeu(){
    const [room,setRoom] = useState("un")
    const [dial,setDial] = useState(0)
    const rooms={
        "regles":{
            "component":<div>Page de regle</div>,
            "dialogue":[""],
            "clickable":[{"coords":[139, 191, 262, 248],
                "action":""}]
        },
        "un":{
            "component":<Un setRoom={setRoom}/>,
            "dialogue":["fsfudgfuisdgiy",",fskhfudhsu"]
        },
        "deux":{
            "component": <Deux setRoom={setRoom}/>,
            "dialogue":[""]
        }
    }
return (
    <div id={"jeu"}>

        {rooms[room].component}
        <div id={"overlay"}>
            <div id={"bottomBar"}>
                <div id={"context"}>
                    <p>{rooms[room].dialogue[dial]}</p>
                    <button onClick={()=>{
                        setDial(dial+1)
                    }}>next</button>
                </div>
                <div id={"choice"} >

                </div>
            </div>
        </div>

    </div>
)
}