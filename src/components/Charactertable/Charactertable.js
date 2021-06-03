import styles from './Charactertable.module.scss';
import Link from 'next/link';
import { Code } from '@material-ui/icons';


export default function Charactertable({ nome, especie, planeta, image, code }) {
  return (
    <Link key={code} href={`character/${code}`}>
      <a>
        <div className={styles.charactherContainer}>
            <div className={styles.conteinerimg}><img height="100" src={image} /> </div>
            <div className={styles.chato}>{nome}</div>
            <div className={styles.chato}>{planeta}</div>
            <div className={styles.chato}>{especie}</div>
          </div>
      </a>
    </Link>
  )
}

