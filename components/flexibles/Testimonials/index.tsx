import type TestimonialsInterface from './interface'

import Testimonial from '../../modules/Testimonial'

import styles from './styles.module.scss'

export default function Testimonials({
  title,
  testimonials,
}: TestimonialsInterface) {
  return (
    <section className={styles['testimonials']}>
      <h2 className={styles['testimonials__title']}>{title}</h2>

      <ul className={styles['testimonials__list']}>
        {testimonials.slice(0, 3).map((item, index) => (
          <li
            key={`testimonial-${item.author}-${index}`}
            className={styles['testimonials__item']}
          >
            <Testimonial
              count={index + 1}
              text={item.text}
              author={item.author}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
