import { useState } from 'react';
import "./CreditCard.css"
import CB from "../assets/CB.png"
import insert from "../assets/insert.png"
import pouleEpargne from "../assets/poul'epargne.png"
import pouletHolo from "../assets/pouletHolo.png"
import pouletVolant from "../assets/Pouletvolant.png"
import puce from "../assets/puce.png"
import ssContact from "../assets/sanscontact.png"
import visa from "../assets/visa.png"
import graph from "../assets/graph-paper.svg"


export default function CreditCard () {

    const [showFirstCard, setShowFirstCard] = useState(true);

    const handleClick = () => {
      setShowFirstCard(!showFirstCard);
    };
    
    return (
        <div id="cardContainer">
        {showFirstCard ? (
          <div className="container" onClick={handleClick}>
            <div className="triangle">
              <img src={insert} alt="triangle" />
            </div>
            <div className="expire">
              <p>EXPIRE <br /> A FIN</p>
            </div>
            <div className="date"><p>07/28</p></div>
            <div className="visa">
              <img src={visa} alt="visa" />
            </div>
            <div className="nom"><p>MME GALINA C. NUGGETS</p></div>
            <div className="sscontact-puce"></div>
            <div className="logo__name">
              <img src={pouleEpargne} alt="Poul' Epargne logo" />
              <p>POUL’ <br /> EPARGNE</p>
            </div>
            <div className="logo__poule">
              <img src={pouletVolant} alt="poulet volant" />
            </div>
            <div className="sansContact__puce">
              <img src={ssContact} alt="sans contact" />
              <img src={puce} alt="puce" />
            </div>
            <div className="num__carte"><p>1843 9236 0046 8346</p></div>
            <div className="info__carte"><p>CARTE DE CREDIT DEBIT</p></div>
          </div>
        ) : (
          <div className="verso" onClick={handleClick}>
            <div className="bande">
            
            </div>
            <div className="signature">
                <p>SIGNATURE DU TITULAIRE OBLIGATOIRE</p>
            </div>
            <div className="bande__multicouleur">
                <p>719</p>
            </div>
            <div className="cb">
                <img src={CB} alt="cb" />
            </div>
            <div className="poulet">
                <img src={pouletHolo} alt="holo" />
            </div>
            <div className="texte">
                <p>PE LIBRE REPONSE 50299 - 93755 PLUMEBOURG CEDEX.</p>
                <p>Important : carte strictement personnelle, propriété de la Poul’ Épargne émettrice qui peut la retirer à tout moment. Tout poulet trouvant cette carte est prié de bien vouloir l’adresser sous pli non affranchi à l’adresse ci dessus.</p>
            </div>
            <div className="visaverso">
                <img src={visa} alt="visa" />
            </div>
            <div className="date__verso">
                <p>Pondu le 12/07/2024 à 21h04</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  




//Texte Recto

// POUL’ EPARGNE
// 1843 9236 0046 8346
// CARTE DE CREDIT DEBIT
// EXPIRE A FIN
// 07/28
// MME GALINA C. NUGGETS


//Texte Verso

// Pondu le 12/07/2024 à 21h04
// SIGNATURE DU TITULAIRE OBLIGATOIRE
// PE LIBRE REPONSE 50299 - 93755 PLUMEBOURG CEDEX.
// Important : carte strictement personnelle, propriété de la Poul’ Épargne émettrice qui peut la retirer à tout moment. Tout poulet trouvant cette carte est prié de bien vouloir l’adresser sous pli non affranchi à l’adresse ci dessus.