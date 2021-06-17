import Charactertable from '../components/Charactertable/Charactertable';
import styles from './Home.module.scss';
import React from 'react';
import { useState } from "react";
import SearchInput from '../components/SearchInput/SearchInput';
import Organizer from '../components/Organizer/Organizer';
import Head from "next/head";

export default function Home({ characters }) {

  const [keyword, setKeyword] = useState("");

  const filteredCharacter = characters.filter(
    (character) =>
      character.name.toLowerCase().includes(keyword) ||
      character.origin.name.toLowerCase().includes(keyword) ||
      character.species.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };



  return (
    <>
      <Head>
        <title>Rick&Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.containerinicio}>
        <div className={styles.texto}>
          <h3>Wubba Lubba Dub-Dub </h3>
          <h1>RICK AND MORTY</h1>
          <h4>Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.</h4>
        </div>

        <div className={styles.imagem}><img src={'./inicio.png'} /></div>
      </div>

        <SearchInput placeholder="SEARCH" onChange={onInputChange} />
        
      <div className={styles.tableContainer}>

        <Organizer characters = {filteredCharacter}/>

        <div className={styles.tableBody}>
          {characters && filteredCharacter.map(
            character =>
              <Charactertable
                image={character.image}
                nome={character.name}
                planeta={character.origin.name}
                especie={character.species}
                estado={character.status}
                code={character.id}
                genero={character.gender}
                key={character.id}
              />
          )}
          <div className={styles.notfound}>
          {(filteredCharacter.length == 0)?'NOT FOUND':''}
          </div>
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