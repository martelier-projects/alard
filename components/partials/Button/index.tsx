import Link from 'next/link'

import type ButtonInterface from './interface'

import styles from './styles.module.scss'

const button = ({ children, link }: ButtonInterface) => (
  <>
    {link ? (
      <Link href={link}>
        <a className={styles['button']}>{children}</a>
      </Link>
    ) : (
      <button className={styles['button']} type="button">
        {children}
      </button>
    )}
  </>
)

export default button
