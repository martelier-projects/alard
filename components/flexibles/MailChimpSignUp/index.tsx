import type MailChimpSignUpInterface from './interface'

import styles from './styles.module.scss'

export default function MailChimpSignUp({
  children,
}: MailChimpSignUpInterface) {
  return (
    <div className={styles['container']}>
      <p>Hier komt de mail chimp sign up!</p>
    </div>
  )
}
