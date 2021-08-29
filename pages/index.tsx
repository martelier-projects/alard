import { attributes } from '../content/pages/home.md'

import DefaultTemplate from '../templates/Default'

export default function Home() {
  return (
    <>
      <DefaultTemplate {...attributes} />
    </>
  )
}
