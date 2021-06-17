import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a>
          <Image className={styles.headerimage}
            src="/favicon.png"
            alt="logo"
            width={90}
            height={31.38}
          />
          </a>
        </Link>
      </header>
    </>
  )
}