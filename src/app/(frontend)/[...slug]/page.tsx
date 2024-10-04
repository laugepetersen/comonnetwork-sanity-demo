import client from '@/lib/sanity/client'
import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { notFound } from 'next/navigation'
import processMetadata from '@/lib/processMetadata'
import * as Sanity from '@/types/sanity'
import Modules from '@/ui/molecules/modules'

export default async function Page({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return <Modules modules={page?.modules} />
}

export async function generateMetadata({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return processMetadata(page)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[
			_type == 'page' &&
			defined(metadata.slug.current) &&
			!(metadata.slug.current in ['index', '404', 'blog/*'])
		].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug: slug.split('/') }))
}

async function getPage(params: Props['params']) {
	return await fetchSanity<Sanity.Page>(
		groq`*[
			_type == 'page' &&
			metadata.slug.current == $slug &&
			!(metadata.slug.current in ['index', '404', 'blog/*'])
		][0]{
			...,
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
		{
			params: { slug: params.slug?.join('/') },
			tags: ['page'],
		},
	)
}

type Props = {
	params: { slug?: string[] }
}
