import {useState} from "react";
import {Header} from "./Header";
import './style.css'

export function Contact({setPage}){
    const [phone,setPhone] = useState(6)
    return(<>

        <Header setPage={setPage}/>
        <div className="contact">
    <h1>Contactez-nous</h1>

    <div className="equipe">
        <h2>Voici notre équipe FANTIN!!!</h2>
        <ul>de l'iut Paul Sabatier, composé de :
            <li><img alt="Fantin Elallouf" href="./Fantin.jpg"/>
                Fantin Elallouf
                Deuxième année, chef de l'équipe
                "Tout à une fin sauf la banane qui en a deux"
                
            </li>
            <li><img alt="Lucille Ferran" href="./Lucille.jpg"/>
                Lucille Ferran
                Deuxième année, scenariste
                "Je vais faire une sieste de 10 minutes je penses."
                
            </li>
            <li><img alt="Killian Guillaux" href="./Killian.jpg"/>
                Killian Guillautaux
                Première années, expert en JS du groupe
                "Trop de pression sur moiiiii !!!"
                
            </li>
            <li><img alt="Phuong Thao Nguyen" href="./Thao.jpg"/>
                Phuong Thao Nguyen
                Deuxième années, graphiste du groupe
                "Vous voyez à quoi ressemble l'hepatite B ? He bah moi ouii."
                
            </li>
            <li><img alt="Léo Babaux" href="./Leo.jpg"/>
                Léo Babaux
                Deuxième année,
                "Je vais jeter les bouteilles parce que je me fais vraiment chier là..."

            </li>
            <li><img alt="Florent Combet" href="./Florent.jpg"/>
                Florent Combet
                Deuxième année, 
                "Je ne suis pas inspiré."
            </li>
            <li><img alt ="Théo Lugagne" href="./Theo.jpg"/>
                Théo Lugagne
                Première année
                "T'aurais pas une citation à mettre là ?"
            </li>
            <li><img alt="Jorian Gouagout" href="./Jorian.jpg"/>
                Jorian Gouagout
                Première année, Faché avec les carroussels
                "J'ai pas envie de parler mec"

            </li>
            <li><img alt="Emmanuel Ah-Hong" href="./Emmanuel.jpg"/>
                Emmanuel Ah-Hong
                Première année, 
                "Je vais faire un bouton qui envoie sur un rick roll"
            </li>
        </ul>
    </div>

    <form>
        <div className="slider-container">
            <div className="slider">
                <div className="slides">
                    <div id="slides__1" className="slide">
                        <span className="slide__text"><label for="fname">Nom & prénom</label>
                        <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"/>
                        </span>
                        <a className="slide__prev" href="#slides__4" title="Next"></a>
                        <a className="slide__next" href="#slides__2" title="Next"></a>
                    </div>
                    <div id="slides__2" className="slide">
                        <span className="slide__text"><label for="emailAddress">Email</label>
                        <input id="emailAddress" type="email" name="email" placeholder="Votre email"/>
                        </span>
                        <a className="slide__prev" href="#slides__1" title="Prev"></a>
                        <a className="slide__next" href="#slides__3" title="Next"></a>
                    </div>
                    <div id="slides__3" className="slide">
                        <span className="slide__text"><label for="subject">Message</label>
                        <textarea id="subject" name="subject" placeholder="Votre message" style={{height:"200px"}}></textarea>
                        </span>
                        <a className="slide__prev" href="#slides__2" title="Prev"></a>
                        <a className="slide__next" href="#slides__4" title="Next"></a>
                    </div>
                    <div id="slides__4" className="slide">
                        <span className="slide__text"><label for="numero">numero</label>
        	            <input type="range" value={phone} onChange={(event)=>{
                            console.log(event.target.value)
                            setPhone(event.target.value)

                        }} min="06000000" max="07999999" onnput="this.nextElementSibling.value = this.value"/><output>0{phone}</output>
                        </span>
                        <a className="slide__prev" href="#slides__3" title="Prev"></a>
                        <a className="slide__next" href="#slides__5" title="Prev"></a>
                    </div>
                    <div id="slides__5" className="slide">
                        <span className="slide__text"> <input type="submit" defaultValue="Envoyer"/></span>
                        <a className="slide__prev" href="#slides__4" title="Prev"></a>
                        <a className="slide__next" href="#slides__1" title="Prev"></a>
                    </div>

                    <div className="slider__nav">
                        <a className="slider__navlink" href="#slides__1"></a>
                        <a className="slider__navlink" href="#slides__2"></a>
                        <a className="slider__navlink" href="#slides__3"></a>
                        <a className="slider__navlink" href="#slides__4"></a>
                        <a className="slider__navlink" href="#slides__5"></a>
                    </div>
                </div>
            </div>
        </div>   
    </form>
  </div>
    </>)
}