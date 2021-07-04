interface Topic {
  title: string
  text: string
}

export default interface PageHeader {
  component: 'page-header'
  type: 'pageHeader'

  title: string
  text: string
  image: string
  imageAlt: string
  topics: Topic[]

  buttonLabel?: string
  buttonLink?: string
}
