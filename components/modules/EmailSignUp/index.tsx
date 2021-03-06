import type EmailSignUpInterface from './interface'

import styles from './styles.module.scss'

export default function EmailSignUp({ label, submit }: EmailSignUpInterface) {
  return (
    <div id="mc_embed_signup" className={styles['email-sign-up']}>
      <form
        action="https://dedocentenacademie.us6.list-manage.com/subscribe/post?u=f8010ef29542e0858324666b2&amp;id=d6e6059a25"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate={true}
      >
        <div id="mc_embed_signup_scroll" data-element="form-wrapper">
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">{label}</label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Email adres"
            />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            />
          </div>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div
            style={{
              position: 'absolute',
              left: '-5000px',
            }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_c9de28e8236a6b661ba2832ad_8ec8abe12c"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              defaultValue={submit}
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
