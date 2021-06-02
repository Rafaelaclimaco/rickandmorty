import Charactertable from '../components/Charactertable/Charactertable';
import styles from './Home.module.scss';
import React from 'react';


export default function Home({ characters }) {

  return (
    <>
    <div className={styles.conteinerinicio}>
    <div className={styles.inicio}>
    <div>Wubba Lubba Dub-Dub </div>
    <div>RICK AND MORTY</div>
    <p>Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.</p>
    </div>
    <img className={styles.imagem} height="500" src={'./inicio.png'} />
    </div>
    <div className={styles.tableContainer}>

      <div className={styles.tableHead}>
        <div></div>
        <div>NAME</div>
        <div>PLANETS</div>
        <div>SPECIES</div>
      </div>

      <div className={styles.tableBody}>
      {characters && characters.map(
        character =>
        <Charactertable
        key={character.id} 
        image={character.image}
        nome={character.name}
        planeta={character.origin.name}
        especie={character.species}
        estado={character.status}
        code={character.id}
        genero={character.gender}
        
    />
      )}
       </div>
    </div>
</>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await res.json();



  return {
    props: {
      characters: characters.results
    },
    revalidate: 10
  }
}