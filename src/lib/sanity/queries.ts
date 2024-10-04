import { fetchSanity, groq } from './fetch'
import * as Sanity from '@/types/sanity'
import { defineQuery } from 'next-sanity'

export async function getIndexPage() {
	const INDEX_PAGE_QUERY =
		defineQuery(`*[_type == 'page' && metadata.slug.current == 'index'][0]{
		...,
		metadata {
			...,
			'ogimage': image.asset->url + '?w=1200',
		}
	}`)

	const page = await fetchSanity(INDEX_PAGE_QUERY, { tags: ['page'] })

	if (!page) {
		throw new Error(
			"Missing 'page' document with metadata.slug 'index' in Sanity Studio",
		)
	}

	return page
}

export async function get404Page() {
	const _404_PAGE_QUERY = defineQuery(
		`*[_type == 'page' && metadata.slug.current == '404'][0]`,
	)
	const _404 = await fetchSanity(_404_PAGE_QUERY, { tags: ['page'] })

	if (!_404) {
		throw new Error(
			"Missing 'page' document with metadata.slug '404' in Sanity Studio",
		)
	}

	return _404
}

export async function getSite() {
	const site = await fetchSanity(
		groq`
			*[_type == 'site'][0] {
				title,
				siteLogo {
                  size,
                  logo {
                    ...
                      asset->
                  },
                }
			}
		`,
		{ tags: ['site'] },
	)

	if (!site) throw new Error("Missing 'site' document in Sanity Studio")

	return site
}
