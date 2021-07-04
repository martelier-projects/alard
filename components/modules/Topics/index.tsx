import type TopicsInterface from './interface'

import styles from './styles.module.scss'

export default function Topics({ topics }: TopicsInterface) {
  return (
    <>
      <h2 className="sr-only">Topics</h2>

      <ul className={styles['list']}>
        {topics.map(({ title, text }) => (
          <li key={title} className={styles['item']}>
            <h3>{title}</h3>
            <p>{text}</p>
            {}
          </li>
        ))}
      </ul>
    </>
  )
}
