import { stegaClean } from '@sanity/client/stega'
import * as Sanity from '@/types/sanity'

export default function (
	page: Sanity.Page,
	{
		base = true,
		params,
	}: {
		base?: boolean
		params?: string
	} = {},
) {
	const slug = page.metadata?.slug?.current
	const path = slug === 'index' ? null : slug

	return (
		(base ? process.env.NEXT_PUBLIC_BASE_URL + '/' : '/') +
		[path, stegaClean(params)].filter(Boolean).join('/')
	)
}
