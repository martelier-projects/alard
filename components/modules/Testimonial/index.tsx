import type TestimonialInterface from './interface'

import Quotes from '../../../public/icons/quotes.svg'

import styles from './styles.module.scss'

export default function Testimonial({
  text,
  author,
  count,
}: TestimonialInterface) {
  return (
    <figure className={styles['testimonial']} data-count={count}>
      <span className={styles['testimonial__icon']} aria-hidden="true">
        <Quotes />
      </span>

      <blockquote className={styles['testimonial__text-container']}>
        <p className={styles['testimonial__text']}>{text}</p>
      </blockquote>

      <figcaption className={styles['testimonial__author']}>
        {author}
      </figcaption>
    </figure>
  )
}
