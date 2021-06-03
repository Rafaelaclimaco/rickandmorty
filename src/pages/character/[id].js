import styles from './Character.module.scss';

export default function Character({character}) {
console.log(character);
    return (
        <>
            <div className={styles.container}>
                <img className={styles.characterimg} height="100" src={character.image} />
            </div>
            
            <div className={styles.status}>   </div> 
                    
                  

            <div className={styles.characterepisode}>
            <h2>{character.status}</h2>
                    <h1>{character.name}</h1>
            </div>

            <div className={styles.container_characterdetails}>
                <div className={styles.characterdetails}>
                    <h2 className={styles.denominar}>Planet</h2>
                    <h2>{character.origin.name}</h2>
                </div>

                <div className={styles.characterdetails}>
                    <h2 className={styles.denominar}>Species</h2>
                    <h2>{character.species}</h2>
                </div>

                <div className={styles.characterdetails}>
                    <h2 className={styles.denominar}>Gender</h2>
                    <h2>{character.gender}</h2>
                </div>
            

            <h1 className={styles.characterepisode}>EPISODES</h1>

            <div className={styles.characterdetails}>
                    <h2 className={styles.denominar}>episode1</h2>
            </div>

            <div className={styles.characterdetails}>
                    <h2 className={styles.denominar}>episode2</h2>
            </div>

            <div className={styles.characterdetails}>
                    <h2 className={styles.denominar}>episode3</h2>
            </div>
            </div>
        </>
    )
}




export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const code = params.id;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${code}`);
    const character = await res.json();



    return {
        props: {
            character
        },
        revalidate: 10
    }
}