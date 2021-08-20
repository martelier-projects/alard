import { NextSeo } from 'next-seo'
import type SeoInterface from '../../../interfaces/Seo'

export default function Seo({ pageTitle, pageDescription }: SeoInterface) {
  return (
    <NextSeo
      title={pageTitle}
      description={pageDescription}
      openGraph={{
        site_name: 'Studenten verleiden tot leren',
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: '/images/boek_cover.png',
          },
        ],
      }}
    />
  )
}
