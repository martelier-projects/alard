export default interface TextMedia {
  order: 'text-image' | 'image-text'
  text: string
  image: string
  imageAlt: string
  imageToTheEdge?: boolean
  title?: string
  children?: React.ReactNode
}
