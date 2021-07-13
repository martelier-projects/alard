import type mailChimpSignUpInterface from './interface'

import TextMedia from '../TextMedia'
import EmailSignUp from '../../modules/EmailSignUp'

export default function mailChimpSignUp({
  title,
  text,
  image,
  imageAlt,
  emailSignUpInputLabel,
  emailSignUpSignUpLabel,
}: mailChimpSignUpInterface) {
  return (
    <TextMedia
      order="text-image"
      imageToTheEdge={false}
      title={title}
      text={text}
      image={image}
      imageAlt={imageAlt}
    >
      <EmailSignUp
        label={emailSignUpInputLabel}
        submit={emailSignUpSignUpLabel}
      />
    </TextMedia>
  )
}
