import { fetchSanity, groq } from '@/lib/sanity/fetch'
import Modules from '@/ui/molecules/modules'
import processMetadata from '@/lib/processMetadata'
import * as Sanity from '@/types/sanity'
import { getIndexPage } from '@/lib/sanity/queries'

export default async function Page() {
	const page = await getIndexPage()
	return <Modules modules={page.modules} />
}

export async function generateMetadata() {
	const page = await getIndexPage()
	return processMetadata(page)
}
