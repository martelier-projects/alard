import ReactMarkdown from 'react-markdown'
import type mailChimpSignUpInterface from './interface'

import EmailSignUp from '../../modules/EmailSignUp'

import styles from './styles.module.scss'

export default function mailChimpSignUp({
  title,
  text,
  emailSignUpInputLabel,
  emailSignUpSignUpLabel,
}: mailChimpSignUpInterface) {
  return (
    <section className={styles['container']}>
      <div className={styles['inner']}>
        <h2 className={styles['title']}>{title}</h2>
        <div className={styles['text']}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>

        <div className={styles['email-sign-up']}>
          <EmailSignUp
            label={emailSignUpInputLabel}
            submit={emailSignUpSignUpLabel}
          />
        </div>
      </div>
    </section>
  )
}
