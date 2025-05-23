import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.terms')
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://yourwallet.tr/terms-of-service',
      images: [
        {
          url: 'https://yourwallet.tr/preview.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 