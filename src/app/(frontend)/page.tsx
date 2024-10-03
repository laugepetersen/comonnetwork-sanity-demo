import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { modulesQuery } from '@/lib/sanity/queries'
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'
import * as Sanity from '@/types/sanity'

export const revalidate = 60 // invalidate every hour

export default async function Page() {
	const page = await getPage()
	return <Modules modules={page.modules} />
}

export async function generateMetadata() {
	const page = await getPage()
	return processMetadata(page)
}

async function getPage() {
	const page = await fetchSanity<Sanity.Page>(
		groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
			...,
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200',
			}
		}`,
		{ tags: ['homepage'], revalidate: 60 },
	)

	if (!page) {
		throw new Error(
			"Missing 'page' document with metadata.slug 'index' in Sanity Studio",
		)
	}

	return page
}
