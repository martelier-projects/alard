import Link from 'next/link'

import type ButtonInterface from './interface'

import styles from './styles.module.scss'

const button = ({ children, link, size = 'normal' }: ButtonInterface) => (
  <>
    {link ? (
      <Link href={link}>
        <a data-size={size} className={styles['button']}>
          {children}
        </a>
      </Link>
    ) : (
      <button data-size={size} className={styles['button']} type="button">
        {children}
      </button>
    )}
  </>
)

export default button
