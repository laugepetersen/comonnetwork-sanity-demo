// import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import Header from '@/ui/Header'
import Footer from '@/ui/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import VisualEditingControls from '@/ui/VisualEditingControls'
import '@/styles/app.css'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/* <GoogleTagManager gtmId='' /> */}

			<body className="bg-[#141825] text-white">
				<Header />
				<main id="main-content" tabIndex={-1} className="min-h-screen">
					{children}
				</main>
				<Footer />

				<Analytics />
				<SpeedInsights />
				<VisualEditingControls />
			</body>
		</html>
	)
}
