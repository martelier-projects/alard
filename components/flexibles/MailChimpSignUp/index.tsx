import type mailChimpSignUpInterface from './interface'

import TextMedia from '../TextMedia'
import EmailSignUp from '../../modules/EmailSignUp'

import styles from './styles.module.scss'

export default function mailChimpSignUp({
  title,
  text,
  image,
  imageAlt,
}: mailChimpSignUpInterface) {
  return (
    <TextMedia
      order="text-image"
      imageToTheEdge={true}
      title={title}
      text={text}
      image={image}
      imageAlt={imageAlt}
    >
      <EmailSignUp label="label" submit="submit" />
    </TextMedia>
  )
}
