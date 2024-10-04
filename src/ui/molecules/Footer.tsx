import { getSite } from '@/lib/sanity/queries'

export default async function Footer() {
	const { title } = await getSite()

	return (
		<div className="border-t border-t-white/5 py-4 text-center text-sm opacity-75">
			&copy; {new Date().getFullYear()} {title}
		</div>
	)
}
