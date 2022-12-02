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
                ""
            </li>
            <li><img alt ="Théo Lugagne" src="./Theo.jpg"/>
                Théo Lugagne
                Première année
                ""
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
                    <div id="slides_1" class="slide">
                        <span class="slide_text">1</span>
                        <a class="slide_prev" href="#slide_4" title="Next"></a>
                        <a class="slide_next" href="#slide_2" title="Next"></a>
                    </div>
                    <div id="slide_2" class="slide">
                        <span class="slide_text">2</span>
                        <a class="slide_prev" href="#slides_1" title="Prev"></a>
                        <a class="slide_next" href="#slides_3" title="Next"></a>  
                    </div>
                    <div id="slide_3" class="slide">
                        <span class="slide_text">3</span>
                        <a class="slide_prev" href="#slide_2"></a>
-                               <a class="slide_next" href="#slide_4"></a>
                    </div>
                    <div id="slide_4" class="slide"></div>
                        <span class="slide_text">4</span>
                        <a class="slide_prev" href="#slide_3"></a>
                        <a class="slide_next" href="#slide_1"></a>        
                    </div>
            </div>
        </div>
    </form>
  </div>)
}