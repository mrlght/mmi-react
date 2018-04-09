/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import '../../css/styles.css';
// On peut aussi importer du CSS de la meme facon.

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleStatusChange = this.handleStatusChange.bind(this);

    this.state = {
      machines: [
        {
          id: 0,
          name: "Machine à café",
          isActive: true
        },
        {
          id: 1,
          name: "Machine à thé",
          isActive: false
        },
        {
          id: 2,
          name: "Machine à frappucino",
          isActive: true
        },
        {
          id: 3,
          name: "Machine à citron",
          isActive: true
        }
      ]
    };
    
    
  }
  
    // Méthode pour activer une machine
  handleStatusChange(key) {
    // 1. On copie le state existant
    const machines = { ...this.state.machines };
    // 2. On modifie le status de CETTE machine
    
    if (machines[key].isActive == true)
    {machines[key].isActive = false;
      
    }
    else
    {machines[key].isActive = true;
       
    }
    // Pour vérifier la nouvelle collection dans la console :
    console.log({ machines });

    // 3. On applique cette nouvelle collection au state
    this.setState({ machines });
  }
  
  
    compteurActive() {
    //on initialise le compteur
    let compteur = 0;
    //on boucle pour compter les machines activées
    this.state.machines.forEach((element) =>
    {if (element.isActive == true)
        {compteur = compteur + 1;
            }
        }
        
    )
    
    console.log(compteur);
    return compteur
    
  }

  render() {
    return (
      <div className="main">
        <Header>
        <span> nombre de machines: {this.state.machines.length} </span>
        // ça fonctionne mais ca créé une erreur quand on touche aux boutons. et puis ça s'affiche pas dans le header.
        <span> nombre de machines actives: {this.compteurActive()} </span>
        </Header>
          {/*Conteneur de notre liste*/}
          <div className="machines-list">
            {/*Boucle sur notre collection de machines*/}
            {Object
                .keys(this.state.machines)
                .map(key =>
                // Le composant Machine s'affichera autant de fois
                // qu'il y a d'objets dans la collection.
                <Machine name={this.state.machines[key].name}
                         key={this.state.machines[key].id}
                         index={this.state.machines[key].id}
                         handleStatusChange={this.handleStatusChange}
                         isActive={this.state.machines[key].isActive}/>
              )}
          </div>
           <span> nombre de machines: {this.state.machines.length} </span>
           <span> nombre de machines actives: {this.compteurActive()} </span>
        <Footer/>
      </div>
    );
  }
}
export default App;
