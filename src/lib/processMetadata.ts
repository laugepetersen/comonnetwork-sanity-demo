import { getSite } from '@/lib/sanity/queries'
import processUrl from './processUrl'
import type { Metadata } from 'next'
import type * as Sanity from '@/types/sanity'
import { urlFor } from './sanity/urlFor'

export default async function processMetadata(
	page: Sanity.Page,
): Promise<Metadata> {
	const site = await getSite()
	const url = processUrl(page)
	const { title, description, image, noIndex } = page.metadata!

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
		title: title ? `${site.title} - ${title}` : site.title,
		description,
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			// images: image ?  || site.ogimage,
		},
		robots: {
			index: !noIndex,
		},
		alternates: {
			canonical: url,
			types: {
				'application/rss+xml': '/blog/rss.xml',
			},
		},
	}
}
