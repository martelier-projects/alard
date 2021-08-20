import type DottedLineInterface from './interface'

import styles from './styles.module.scss'

export default function DottedLine({ color }: DottedLineInterface) {
  return <div className={styles['dotted-line']} />
}
