import type TopicsInterface from './interface'

import styles from './styles.module.scss'

export default function Topics({ topics }: TopicsInterface) {
  return (
    <div className={styles['topics']}>
      <h2 className="sr-only">Topics</h2>

      <ul className={styles['list']}>
        {topics.map(({ title, text }) => (
          <li key={title} className={styles['topic']}>
            <div>
              <h3 className={styles['topic-title']}>{title}</h3>
              <p className={styles['topic-text']}>{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
