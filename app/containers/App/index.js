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

export default function App() {
  return (
    <div>
      <Header/>
      <Machine name="Machine 1" isActive/>
      <Machine name="Machine 2"/>
      <Machine name="Machine 3" isActive/>
      <Footer/>
    </div>
  );
}
