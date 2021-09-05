import type FlexibleContentInterface from './interface'

import LargeText from '../../flexibles/LargeText'
import MailChimpSignUp from '../../flexibles/MailChimpSignUp'
import PageHeader from '../../flexibles/PageHeader'
import Text from '../../flexibles/Text'
import TextMedia from '../../flexibles/TextMedia'
import DottedLine from '../../flexibles/DottedLine'
import Testimonials from '../../flexibles/Testimonials'

export default function FlexibleContent({
  sections,
}: FlexibleContentInterface) {
  return (
    <>
      {sections.map((section, index) => {
        if (section.component === 'large-text') {
          return <LargeText key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'text') {
          return <Text key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'text-media') {
          return <TextMedia key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'page-header') {
          return <PageHeader key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'mail-chimp-sign-up') {
          return (
            <MailChimpSignUp key={`flexible-content-${index}`} {...section} />
          )
        }
        if (section.component === 'dotted-line') {
          return <DottedLine key={`flexible-content-${index}`} {...section} />
        }
        if (section.component === 'testimonials') {
          return <Testimonials key={`flexible-content-${index}`} {...section} />
        }

        return null
      })}
    </>
  )
}
