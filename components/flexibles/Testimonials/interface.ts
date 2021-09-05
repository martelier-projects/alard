interface Testimonial {
  text: string
  author: string
}

export default interface Testimonials {
  title: string
  testimonials: Testimonial[]
}
