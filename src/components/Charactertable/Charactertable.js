import styles from './Charactertable.module.scss';
import Link from 'next/link';



export default function Charactertable({ nome, especie, planeta, image, code }) {
  return (
  
  <a>
    <Link href={`character/${code}`}>
        <div className={styles.charactherContainer}>
          <div className={styles.conteinerimg}><img height="100" src={image} /> </div>
          <div className={styles.nome}>{nome}</div>
          <div className={styles.planeta}>{planeta}</div>
          <div className={styles.especie}>{especie}</div>
        </div>
    </Link>
     </a>
  )
}

