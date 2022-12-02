import styles from "./jeu.module.css";
import {Page} from "./pages/Page";
import {useEffect, useState} from "react";

export function Jeu({setPage}){
    const [baiseProteger,setBaiseProteger] = useState(false)
    const [capote,setCapote] = useState(false)

    const [room,setRoom] = useState("reveil")
    const [dial,setDial] = useState(0)

    const rooms={
        "regles":{
            "component":<div>Page de regle</div>,

        },
        "reveil":{
            "background":"./chambreJ.png",
            "dialogues":[{"text":"Vous vous réveillez d’une longue sieste réparatrice.", "type":"italique"},
                {"text":"Le téléphone apparait à l’écran avec une notification.","type":"italique"}],
            "choix":[
                {"intitule":null,"direction":"telephone"}
            ]
        },

        "telephone":{
            "background":"./telephone1.png",
            "dialogues":[{"text":"Vous avez reçu un nouveau message.", "type":"italique"}],
            "choix":[
                {"intitule":null,"direction":"chambre"}
            ]
        },

        "chambre":{
            "background":"./chambreJ.png",
            "dialogues":[{"text":"Vous admirez votre chambre.", "type":"italique"}],
            "choix":[
                {"intitule":"Ouvrir la porte","direction":"couloir"}
            ]
        },

        "couloir":{
            "background":"./couloir.png",
            "dialogues":[{"text":"Oh, Loulou, tu es réveillé ?", "type":null},
                {"text":"Votre mère vous appelle depuis le salon.","type":"italique"}],
            "choix":[
                {"intitule":"Sortir de la maison","direction":"devantMaison"},
                {"intitule":"Aller voir sa mère","direction":"salon"}
            ]
        },

        "salon":{
            "background":"./salon.png",
            "dialogues": [{"text":"Salut loulou ! Je voulais te voir pour te parler de quelque chose.","type":null},
                {"text":"Depuis quelques temps, je te vois de plus en plus sortir en soirées et je voulais que tu saches que si tu as des questions sur la sexualité, je serais ravie d’y répondre.","type":null},
                {"text":"Je vais pas te faire le discours bizarre que tous les parents font à leurs enfants mais juste, tiens.","type":null},
                {"text":"Vous avez reçu des préservatifs","type":"italique"},
                {"text":"Vous vous dites que la conversation est quand même un peu bizarre mais vous trouvez la démarche de votre maman amusante, vous n’hésiterez pas à lui poser des questions si vous en avez.","type":"italique"}],
            "choix":[
                {"intitule":null,"direction":"devantMaison"}
            ]
        },

        "devantMaison":{
            "background":"./rue.png",
            "dialogues": [{"text":"","type":null}],
            "choix":[
                {"intitule":"Allez voir plan cul","direction":"ArriverPlantQ"},
                {"intitule":"Aller chercher des capotes","direction":"capote"}
            ]
        },

        "capote":{
            "background":"./rue.png",
            "dialogues": [{"text":"Vous avez reçu des préservatifs","type":"italique"}],
            "choix":[
                {"intitule":"Allez voir plant cul","direction":"ArriverPlantQ"}
            ]
        },

        "ArriverPlantQ":{
            "background":"./chambreQ.png",
            "dialogues": [{"text":"Salut !","type":null}],
            "choix":[
                {"intitule":"Discuter","direction":"discuter"},
                {"intitule":"Baiser","direction":"baiseChoix"}
            ]
        },

        "discuter":{
            "background":"./chambreQ.png",
            "dialogues":[{"text" : "T’as passé une bonne journée ? Moi je me suis levée à 9h30, ensuite j’ai mangé des Chocapics, et puis après je…","type":null}, {"text":"Vous écoutez à moitié ce qu’elle dit, on va pas se mentir, c’est long et elle se fiche un peu de ce que vous en pensez.","type":"italique"}, {"text":"Bon on est pas là pour passer la nuit à discuter, on y va ?","type":null}],
            "choix":[
                {"intitule":"Prendre une capote","direction":"baiseInsist","capote":true},
                {"intitule":"Ne pas prendre de capote","direction":"baiseNonProtege","capote":false},
            ]
        },

        "baiseChoix":{
            "background":"./chambreQ.png",
            "dialogues":[""],
            "choix":[
                {"intitule":"Prendre une capote","direction":"baiseInsist","capote":true},
                {"intitule":"Ne pas prendre de capote","direction":"baiseNonProtege","capote":false},
            ]
        },

        "baiseInsist":{
            "background":"./chambreQ.png",
            "dialogues":[{"text":"T’es sûr que tu veux mettre un préservatif ? Ce sera bien mieux sans c’est pas si grave !","type":null}],
            "choix":[
                {"intitule":"Céder","direction":"baiseNonProtege"},
                {"intitule":"Insister","direction":"baiseInsist2"},
            ]
        },

        "baiseInsist2":{
            "background":"./chambreQ.png",
            "dialogues":[{"text":"Vraiment ? Pfff t’es relou allezz !!!","type":null}],
            "choix":[
                {"intitule":"Céder","direction":"baiseNonProtege"},
                {"intitule":"Insister","direction":"baiseProtege"},
                {"intitule":"Partir","direction":"fin1"},
            ]
        },

        "baiseProtege":{
            "background":"./chambreQ.png",
            "dialogues": [{"text":"Vous insistez et elle finit par céder...","type":"italique"}],
            "choix":[
                {"intitule":null,"direction":"lendemain"},
            ]
        },

        "lendemain":{
            "background":"./chambreQ.png",
            "dialogues": [{"text":"Le lendemain...","type":"italique"}],
            "choix":[
                {"intitule":null,"direction":"telephone2"},
            ]
        },

        "telephone2":{
            "background":"./telephone2.png",
            "dialogues":[{"text":"Vous avez reçu un nouveau message.", "type":"italique"}],
            "choix":[
                {"intitule":"Aller chez le médecin","direction":"medecin"},
                {"intitule":"Ne rien faire","direction":"fin2"}
            ]
        },

        "baiseNonProtege":{
            "background":"./chambreQ.png",
            "dialogues": [{"text":"Vous le faites sans protection","type":"italique"}],
            "choix":[
                {"intitule":null,"direction":"lendemain"},
            ]
        },

        "medecin1":{
            "background":"./medecin.png",
            "dialogues":[{"text":"Vous avez bien fait de vous protéger, normalement vous n’aurez pas de complication mais allez quand même faire un test au cas où.","type":null}],
            "choix":[
                {"intitule":null,"direction":"fin3"},
            ]
        },

        "medecin2":{
            "background":"./medecin.png",
            "dialogues":[{"text":"Vous auriez dû vous protéger, il faut absolument que vous alliez faire un test dans les plus brefs délais.","type":null}],
            "choix":[
                {"intitule":null,"direction":"fin4"},
            ]
        },
        "fin1":{
            "background":"./fin1.png",
            "dialogues":[{"text":null, "type":null}],
            "choix":[
                {"intitule":"Revenir au menu","direction":null}
            ]
        },

        "fin2":{
            "background":"./fin2.png",
            "dialogues":[{"text":null, "type":null}],
            "choix":[
                {"intitule":"Revenir au menu","direction":null}
            ]
        },

        "fin3":{
            "background":"./fin3.png",
            "dialogues":[{"text":null, "type":null}],
            "choix":[
                {"intitule":"Revenir au menu","direction":null}
            ]
        },

        "fin4":{
            "background":"./fin4.png",
            "dialogues":[{"text":null, "type":null}],
            "choix":[
                {"intitule":"Revenir au menu","direction":null}
            ]
        },

    }
    useEffect(()=>{
        if (room == "baiseProtege"){
            setBaiseProteger(true)
        }else if (room == "capote"){
            setCapote(true)
        }
    },[room])

return (
    <div className={styles.jeu} >

        <Page background={rooms[room].background} clickable={rooms[room].clickable}/>
        <div className={styles.overlay}>
            <div className={styles.bottomBar}>
                <div className={styles.context}>
                    <p>{rooms[room].dialogues[dial].text}</p>
                    {(rooms[room].dialogues.length-1 != dial ? <button onClick={()=>{
                        setDial(dial+1)
                    }}>suivant</button> : <></> )}

                </div>
                <div className={styles.choice} >
                    {(rooms[room].dialogues.length-1 == dial ? rooms[room].choix.map((choix)=>{
                        if (room == "discuter" || room== "baiseChoix"){
                            if (capote == false && choix.capote) {
                                return <button disabled className={styles.boutton} onClick={() => {
                                    setDial(0)
                                    setRoom(choix.direction);
                                }
                                }
                                >Vous n'avez pas pris de capote</button>
                            }else {
                                return <button  className={styles.boutton} onClick={() => {
                                    setDial(0)
                                    setRoom(choix.direction);
                                }
                                }
                                >{(choix.intitule != null ? <>{choix.intitule}</>:<>suivant</>)}</button>
                            }  }
                        return <button className={styles.boutton
                        } onClick={()=>{
                            setDial(0)

                            if (choix.direction == null){
                                setPage("index")
                            }else if (choix.direction == "medecin"){
                                if (baiseProteger){
                                    setRoom("medecin1")
                                }else{
                                    setRoom("medecin2")
                                }

                            }
                            else{
                                setRoom(choix.direction);
                            }


                        }
                        }> {(choix.intitule != null ? <>{choix.intitule}</>:<>suivant</>)}</button>
                    }):<></>)}


                </div>
            </div>
        </div>

    </div>
)
}