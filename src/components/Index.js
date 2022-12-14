import './style.css'
import Slider from "react-slick"
import {Header} from "./Header";

export function Index({setPage}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
    <>

        <Header setPage={setPage}/>

        <div className="game">
            <p className="game_desc">La séxualité est un sujet qui nous concerne tous c'est pourquoi la prévention des infections sexuellement transmissibles est primordiale. 
            <br/>Notre équipe a donc développer une expérience interactive afin de vous sensibiliser sur ces sujet importants.
            <br/>Venez vivre une expérience de prévention contre le VIH !
Prenez toutes les bonnes décisions et trouvez la meilleure fin ! </p>
            <button className="launch_game" onClick={()=>{
                setPage("jeu")
            }}> Jouer  </button>
        </div> 
        <a id="info"></a>
        <div className="info">
            <br/>
            <h1>LA PREVENTION</h1>
            <h2 className='subTitle'>Le dépistage</h2>
            <ul className='desc'>
                <li>dépistage au prêt d’un professionnel de santé (médecin généraliste, gynécologue, sage femme).</li>
                <li>centre gratuit d’information, de dépistage et de diagnostic</li>
                <li>centre de planification et d'éducation familiale</li>
            </ul>
            <br/>
            <h2 className='subTitle'>Le preservatif</h2>
            <p className='desc'>Le préservatif le moyen le plus efficace pour lutter contre les IST. Utilisez un préservatif lors de chaque rapport sexuel et avec chaque partenaire tant que vous n’avez pas la certitude qu’il n’est pas porteur d’une IST.</p>
            <br/>
            <h1>LES IST : INFORMATIONS COMPLEMENTAIRES</h1>
            <br/>
            <div className="info_list">
            <Slider {...settings}>
                <div className='card'>
                    <p><strong>Le VIH</strong></p>
                    <img src="./vih.png" alt="" />
                    <p>Le Virus de l’Immunodéficience Humaine (VIH) s’attaque principalement au system immunitaire de la personne atteinte.</p>
                    <ul>
                        <li><strong>Symptôme </strong>: A court terme, état grippal. A long terme, amaigrissement, dégradation de l’état physique et détérioration du système immunitaire.</li>
                        <li><strong>Traitement </strong>: Le VIH est incurable, il est en revanche possible d’annuler les effet à l’aide de traitement antirétroviral permettant de rendre la charge virale indétectable, se qui empêche la propagation de la maladie. </li>
                    </ul>
                </div>

                
                <div className='card'>
                    <p><strong>Chlamydiose</strong></p>
                    <img src="./chlamydiose.png" alt="" />
                    <p>L'infection à Chlamydia est due à une bactérie appelée Chlamydia trachomatis. C'est l'une des IST les plus fréquentes.</p>
                    <ul>
                        <li><strong>Symptôme </strong>: pertes vaginales anormales, saignements vaginaux, écoulements anormaux par le pénis ou l’anus, picotements ou sensation de brûlure en urinant…</li>
                        <li><strong>Traitement </strong>: antibiotique et abstention de tout rapport sexuel non protégé jusqu'à la fin du traitement.</li>
                    </ul>
                </div>



                <div className='card'>
                    <p><strong>Papillomavirus</strong></p>
                    <img src="./papillomavirus.png" alt="" />
                    <p>Les papillomavirus constituent une famille de virus de génotypes différents qui se transmettent très facilement, quasiment exclusivement par contact sexuel avec ou sans pénétration.</p>
                    <ul>
                        <li><strong>Symptôme </strong>:  verrues qui se manifestent sous forme de petites bosses sur la peau ou les muqueuses.</li>
                        <li><strong>Traitement </strong>: Il n'y a pas de traitement pour l'infection à HPV. Dans 90 % des cas environ, notre système immunitaire l'élimine spontanément.</li>
                    </ul>
                </div>



                <div className='card'>
                    <p><strong>Hépatite B</strong></p>
                    <img src="./hepatiteB.png" alt="" />
                    <p>L’hépatite B est une infection virale du foie du au virus B (VHB).</p>
                    <ul>
                        <li><strong>Symptôme </strong>: fatigue / nausées / jaunisse / état grippal</li>
                        <li><strong>Traitement </strong>: seulement pour les hépatites B chroniques (interféron alfa administré en injection sous la peau pendant 48 semaines)</li>
                    </ul>
                </div>



                <div className='card'>
                    <p><strong>Herpès génital</strong></p>
                    <img src="./herpes.png" alt="" />
                    <p>L’herpès génital est une infection sexuellement transmissible chronique, due à un virus voisin de celui qui provoque l’herpès de la bouche.</p>
                    <ul>
                        <li><strong>Symptôme </strong>: démangeaisons / sensations de brûlures / apparition de vésicules</li>
                        <li><strong>Traitement </strong>: antiviraux de 5 à 10 jours / médicaments contre la douleur / antiseptiques</li>
                    </ul>
                </div>



                <div className='card'>
                    <p><strong>Gonococcie</strong></p>
                    <img src="./Gonococcie.png" alt="" />
                    <p>La gonococcie est une infection d’origine bactérienne se transmettant par pénétrations vaginales, anales ou buccales.</p>
                    <ul>
                        <li><strong>Symptôme </strong>: brûlures / écoulement jaune par les organes génitaux</li>
                        <li><strong>Traitement </strong>: injection d’antibiotique (Ceftriaxone…)</li>
                    </ul>
                </div>


                <div className='card'>
                    <p><strong>Syphilis</strong></p>
                    <img src="./syphillis.png" alt="" />
                    <p>La syphilis est une infection bactérienne qui peuvent amener à de graves complications (rupture de gros vaisseaux sanguins, troubles neurologiques ou psychiatriques, destruction d’organes, voire décès) en absence de traitement.</p>
                    <ul>
                        <li><strong>Symptôme </strong>: boutons sur les organes génitaux / état grippal</li>
                        <li><strong>Traitement </strong>: antibiotiques</li>
                    </ul>
                </div>



                <div className='card'>
                    <p><strong>Mycoplasmes</strong></p>
                    <img src="./mycoplasma.png" alt="" />
                    <p>Les mycoplasmes sont des bactéries responsables d’infections pulmonaires ou d’infections génitales.</p>
                    <ul>
                        <li><strong>Symptôme </strong>: brûlures en urinant / douleurs abdominales…</li>
                        <li><strong>Traitement </strong>: médicaments assez “basiques” (Doxycycline…) pendant une courte durée</li>
                    </ul>
                </div>
                
                
            </Slider>   
             
            
            </div>
           
        </div>
        
        <a id="contact"></a>


        <footer>
            <img href="./logo.png" alt="logo"/>
            <ul>
                <li><a href="#top">Jeu</a></li>
                <li><a href="#info">Informations complémentaires</a></li>
                <li>
                    
                    
                    </li>
            </ul>
<button onClick={()=>{
                setPage("contact")
            }}> Contact  </button>
        </footer>
    </>
    )
}
