import "./style.css";
import {Un} from "./pages/Un";
import {Deux} from "./pages/Deux";
import {useState} from "react";

export function Jeu(){
    const [room,setRoom] = useState("un")
    const rooms={
        "regles":{
            "component":<div>Page de regle</div>
        },
        "un":{
            "component":<Un setRoom={setRoom}/>
        },
        "deux":{
            "component": <Deux setRoom={setRoom}/>
        }
    }
return (
    <div id={"jeu"}>

        {rooms[room].component}
        <div id={"overlay"}>
            <div id={"bottomBar"}>
                <div id={"context"}>
                    <p>Il ce passe quelque chose !</p>
                </div>
                <div id={"choice"} >

                </div>
            </div>
        </div>

    </div>
)
}