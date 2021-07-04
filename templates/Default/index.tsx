import type Page from '../../interfaces/Page'

import FlexibleContent from '../../components/modules/FlexibleContent'
import Seo from '../../components/partials/Seo'

export default function DefaultTemplate({ title, sections, seo }: Page) {
  return (
    <>
      <Seo {...seo} />
      <main>{sections && <FlexibleContent sections={sections} />}</main>
      <footer>Footer</footer>
    </>
  )
}
