import styles from "./jeu.module.css";
import {Page} from "./pages/Page";
import {useState} from "react";

export function Jeu(){
    const [room,setRoom] = useState("un")
    const [dial,setDial] = useState(0)
    const rooms={
        "regles":{
            "component":<div>Page de regle</div>,

        },
        "un":{
            "background":"./salon.png",
            "dialogues":[""],
            "clickable":[{"coords":[1, 3, 4, 5],
                "action":()=>{}}],
            "choix":[
                {"intitule":"Prendre les capotes","direction":"sex"},
                {"intitule":"Refuser les capotes","direction":"not sex"},
            ]
        },

    }
return (
    <div className={styles.jeu} >

        <Page background={rooms[room].background} clickable={rooms[room].clickable}/>
        <div className={styles.overlay}>
            <div className={styles.bottomBar}>
                <div className={styles.context}>
                    <p>{rooms[room].dialogues[dial]}</p>
                    <button onClick={()=>{
                        setDial(dial+1)
                    }}>next</button>
                </div>
                <div className={styles.choice} >
                    {rooms[room].choix.map((choix)=>{
                        return <button onClick={()=>{
                        setRoom(choix.direction);
                        setDial(0)
                        }
                        }> {choix.intitule}</button>
                    })}


                </div>
            </div>
        </div>

    </div>
)
}