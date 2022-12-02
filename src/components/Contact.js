export function Contact(){
    return( <div class="contact">  
    <h1>Contactez-nous</h1>

    <div class="equipe">
        <h2>Voici notre équipe FANTIN!!!</h2>
        <ul>de l'iut Paul Sabatier, composé de :
            <li><img alt="Fantin Elallouf" src="./Fantin.jpg"/>
                Fantin Elallouf
                Deuxième année, chef de l'équipe
                "Tout à une fin sauf la banane qui en a deux"
                
            </li>
            <li><img alt="Lucille Ferran" src="./Lucille.jpg"/>
                Lucille Ferran
                Deuxième année, scenariste
                "Je vais faire une sieste de 10 minutes je penses."
                
            </li>
            <li><img alt="Killian Guillaux" src="./Killian.jpg"/>
                Killian Guillautaux
                Première années, expert en JS du groupe
                "Trop de pression sur moiiiii !!!"
                
            </li>
            <li><img alt="Phuong Thao Nguyen" src="./Thao.jpg"/>
                Phuong Thao Nguyen
                Deuxième années, graphiste du groupe
                "Vous voyez à quoi ressemble l'hepatite B ? He bah moi ouii."
                
            </li>
            <li><img alt="Léo Babaux" src="./Leo.jpg"/>
                Léo Babaux
                Deuxième année,
                "Je vais jeter les bouteilles parce que je me fais vraiment chier là..."

            </li>
            <li><img alt="Florent Combet" src="./Florent.jpg"/>
                Florent Combet
                Deuxième année, 
                "Je ne suis pas inspiré."
            </li>
            <li><img alt ="Théo Lugagne" src="./Theo.jpg"/>
                Théo Lugagne
                Première année
                "T'autais pas une citation à mettre là ?"
            </li>
            <li><img alt="Jorian Gouagout" src="./Jorian.jpg"/>
                Jorian Gouagout
                Première année, Faché avec les carroussels
                "J'ai pas envie de parler mec"

            </li>
            <li><img alt="Emmanuel Ah-Hong" src="./Emmanuel.jpg"/>
                Emmanuel Ah-Hong
                Première année, 
                "Je vais faire un bouton qui envoie sur un rick roll"
            </li>
        </ul>
    </div>

    <form>
        <div class="slider-container">
            <div class="slider">
                <div class="slides">
                    <div id="slides__1" class="slide">
                        <span class="slide__text"><label for="fname">Nom & prénom</label>
                        <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"/>
                        </span>
                        <a class="slide__prev" href="#slides__4" title="Next"></a>
                        <a class="slide__next" href="#slides__2" title="Next"></a>
                    </div>
                    <div id="slides__2" class="slide">
                        <span class="slide__text"><label for="emailAddress">Email</label>
                        <input id="emailAddress" type="email" name="email" placeholder="Votre email"/>
                        </span>
                        <a class="slide__prev" href="#slides__1" title="Prev"></a>
                        <a class="slide__next" href="#slides__3" title="Next"></a>
                    </div>
                    <div id="slides__3" class="slide">
                        <span class="slide__text"><label for="subject">Message</label>
                        <textarea id="subject" name="subject" placeholder="Votre message" style="height:200px"></textarea>
                        </span>
                        <a class="slide__prev" href="#slides__2" title="Prev"></a>
                        <a class="slide__next" href="#slides__4" title="Next"></a>
                    </div>
                    <div id="slides__4" class="slide">
                        <span class="slide__text"><label for="numero">numero</label>
        	            <input type="range" value="24" min="06000000" max="07999999" oninput="this.nextElementSibling.value = this.value"/><output>0</output>
                        </span>
                        <a class="slide__prev" href="#slides__3" title="Prev"></a>
                        <a class="slide__next" href="#slides__5" title="Prev"></a>
                    </div>
                    <div id="slides__5" class="slide">
                        <span class="slide__text"> <input type="submit" value="Envoyer"/></span>
                        <a class="slide__prev" href="#slides__4" title="Prev"></a>
                        <a class="slide__next" href="#slides__1" title="Prev"></a>
                    </div>

                    <div class="slider__nav">
                        <a class="slider__navlink" href="#slides__1"></a>
                        <a class="slider__navlink" href="#slides__2"></a>
                        <a class="slider__navlink" href="#slides__3"></a>
                        <a class="slider__navlink" href="#slides__4"></a>
                        <a class="slider__navlink" href="#slides__5"></a>
                    </div>
                </div>
            </div>
        </div>   
    </form>
  </div>)
}