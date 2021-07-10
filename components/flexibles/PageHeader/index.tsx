import ReactMarkdown from 'react-markdown'

import type PageHeaderInterface from './interface'

import Topics from '../../modules/Topics'
import Button from '../../partials/Button'

import styles from './styles.module.scss'

export default function PageHeader({
  title,
  text,
  image,
  imageAlt,
  buttonLabel,
  buttonLink,
  topics,
}: PageHeaderInterface) {
  return (
    <header className={styles['page-header']}>
      <div className={styles['background-color']}>
        <div className={styles['inner']}>
          <div className={styles['text-container']}>
            <h1 className={styles['title']}>{title}</h1>
            <div className={styles['text']}>
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
            {buttonLabel && buttonLink && (
              <Button link={buttonLink}>{buttonLabel}</Button>
            )}
          </div>

          <figure className={styles['image-container']}>
            <img src={image} alt={imageAlt} className={styles['image']} />
          </figure>
        </div>
      </div>

      {topics && (
        <div className={styles['topics']}>
          <Topics topics={topics} />
        </div>
      )}
    </header>
  )
}
