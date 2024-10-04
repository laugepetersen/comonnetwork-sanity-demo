import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { get404Page } from '@/lib/sanity/queries'
import * as Sanity from '@/types/sanity'
import Modules from '@/ui/molecules/modules'

export default async function NotFound() {
	const page = await get404Page()
	if (!page) return <h1 className="section text-center text-5xl">404</h1>
	return <Modules modules={page?.modules} />
}

export async function generateMetadata() {
	return (await get404Page())?.metadata
}
