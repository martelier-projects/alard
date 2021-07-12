import ReactMarkdown from 'react-markdown'
import type TextMediaInterface from './interface'

import styles from './styles.module.scss'

export default function TextMedia({
  order,
  title,
  text,
  image,
  imageAlt,
  children,
  imageToTheEdge = false,
}: TextMediaInterface) {
  return (
    <div
      data-order={order}
      data-image-to-the-edge={imageToTheEdge}
      className={styles['wrapper']}
    >
      <section className={styles['text-media']}>
        {title && <h2 className={styles['title']}>{title}</h2>}

        <div className={styles['text']}>
          <ReactMarkdown>{text}</ReactMarkdown>

          {children && <div>{children}</div>}
        </div>

        <img src={image} alt={imageAlt} className={styles['image']} />
      </section>
    </div>
  )
}
