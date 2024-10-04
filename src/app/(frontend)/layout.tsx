// import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import Header from '@/ui/molecules/Header'
import Footer from '@/ui/molecules/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import VisualEditingControls from '@/ui/VisualEditingControls'
import '@/styles/app.css'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

const ClashGrotest = localFont({
	src: '../../fonts/ClashGrotesk-Variable.woff2',
	display: 'swap',
	variable: '--font-title',
})

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/* <GoogleTagManager gtmId='' /> */}

			<body className={cn('bg-[#222B40] text-white', ClashGrotest.className)}>
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
