import styles from './Charactertable.module.scss';
import Link from 'next/link';
import { Code } from '@material-ui/icons';


export default function Charactertable({ nome, especie, planeta, image, code }) {
  return (
    <Link href={`character/${code}`}>
      <a>
        <div className={styles.charactherContainer}>

          <div className={styles.conteinerimg}><img height="100" src={image} /> </div>
          <div className={styles.nome}>{nome}</div>
          <div className={styles.planeta}>{planeta}</div>
          <div className={styles.especie}>{especie}</div>
        </div>
      </a>
    </Link>
  )
}

