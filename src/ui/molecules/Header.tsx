import { getSite } from '@/lib/sanity/queries'
import Link from 'next/link'
import Img from '../atoms/Img'
import * as Sanity from '@sanity/types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/urlFor'

export default async function Header() {
	const { siteLogo, title } = await getSite()

	return (
		<div className="mb-4 w-full border-b border-b-white/5 py-2.5 backdrop-blur-sm">
			<div className="container">
				<div className="flex items-center justify-between">
					{siteLogo && (
						<Img
							image={siteLogo.logo as Sanity.Image}
							height={siteLogo.size ? 40 * siteLogo.size : 40}
							style={{ height: `calc(40px * 0.3)` }}
						/>
					)}
					<div className="flex items-center gap-x-5">
						<div className="flex flex-col items-center opacity-80">
							<svg
								className="grid h-5 w-5 place-items-center"
								width="15"
								height="19"
								viewBox="0 0 15 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.88907 0.553556C6.23617 0.122128 5.51928 -0.0572392 4.73839 0.0158842C4.1469 0.340208 3.96766 0.841963 4.20071 1.52137C4.61072 2.46745 5.14839 3.32773 5.81373 4.10219C3.32743 5.76575 1.49934 7.98827 0.329475 10.7693C-0.452257 13.2977 0.157097 15.4127 2.15756 17.1139C5.18614 18.243 8.26878 18.3862 11.4055 17.544C13.9924 16.422 15.0318 14.4504 14.524 11.6296C14.0347 10.2104 13.282 8.95565 12.2658 7.86589C10.5298 6.64065 8.88104 5.31432 7.31921 3.88712C8.07462 3.09631 8.89911 2.37928 9.7925 1.73643C10.0095 1.40845 10.117 1.04993 10.1151 0.66109C9.0374 0.696792 7.96203 0.660875 6.88907 0.553556ZM7.74933 7.75845H6.67399V8.40365C4.82208 8.42344 4.21272 9.28371 4.84591 10.9845C5.59516 11.7181 6.45544 12.2917 7.42673 12.705C7.5333 13.1294 7.56913 13.5595 7.53427 13.9954H6.67399V12.705H4.5233C4.48661 14.1739 5.20352 14.9626 6.67399 15.0708V15.716H7.74933C7.70223 15.4633 7.77392 15.2482 7.9644 15.0708C9.76367 14.6265 10.3013 13.5511 9.57742 11.8448C8.63843 11.2684 7.70645 10.695 6.78152 10.1242C6.58263 9.55771 6.76185 9.30673 7.3192 9.37146C7.5085 9.66309 7.58018 9.9857 7.53427 10.3393H9.68495C9.69829 9.06219 9.05308 8.41699 7.74933 8.40365V7.75845Z"
									fill="white"
								/>
							</svg>

							<Link className="text-sm font-medium lowercase" href="/deals">
								Deals
							</Link>
						</div>
						<div className="flex flex-col items-center opacity-80">
							<svg
								className="grid h-5 w-5 place-items-center"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7.44185 0.415305C11.9974 0.0960319 15.2211 1.99622 17.1125 6.11589C18.5368 11.5803 16.6705 15.4146 11.5137 17.6189C7.35186 18.691 3.99258 17.5034 1.43587 14.056C-1.19474 8.99357 -0.210783 4.81992 4.38796 1.53506C5.38801 1.03158 6.40597 0.658334 7.44185 0.415305ZM7.44188 1.43326C8.46738 1.41547 9.48534 1.48334 10.4958 1.63685C10.3276 2.37709 10.192 3.12361 10.0886 3.87637H7.44188C7.25621 3.04757 7.25621 2.2332 7.44188 1.43326ZM15.7892 5.70877C15.3164 4.6259 14.5699 3.81153 13.5497 3.26566C13.0258 3.75626 12.6186 4.33311 12.3281 4.99619C12.7732 5.64388 13.2821 6.22072 13.855 6.72673C14.5448 6.46674 15.1896 6.12744 15.7892 5.70877ZM3.77715 3.26566C4.086 3.26782 4.3236 3.40353 4.48973 3.67284C4.76946 4.13021 5.07485 4.57134 5.40589 4.99619C4.81894 5.5487 4.27596 6.12554 3.77715 6.72673C3.06825 6.54244 2.45747 6.20311 1.94482 5.70877C2.40392 4.77542 3.0147 3.96105 3.77715 3.26566ZM3.57356 9.16973C2.71807 9.10523 1.9037 9.17311 1.13045 9.37332H3.36997L3.36996 9.37335H1.13049C1.10749 10.3567 1.27708 11.3069 1.63948 12.2236C2.49599 12.2929 3.27636 12.0215 3.98079 11.4093C3.76152 10.9555 3.62572 10.4803 3.5736 9.98413L3.57356 9.98409V9.16973ZM16.6035 9.1698H14.1604C14.0543 9.99557 13.9525 10.8099 13.855 11.6129C14.4955 12.0865 15.2081 12.3579 15.9927 12.4273C16.3663 11.3743 16.5699 10.2885 16.6035 9.1698ZM11.9209 13.4452C12.5939 13.9161 13.1369 14.5269 13.5496 15.2775C12.7094 16.1021 11.6914 16.5771 10.4957 16.7027C10.3174 15.896 10.1818 15.0817 10.0885 14.2596C10.8347 14.2592 11.4455 13.9878 11.9209 13.4452ZM7.64542 14.6668L5.20231 13.4452C5.10438 14.0468 4.79899 14.522 4.28614 14.8704C4.15035 15.0739 4.15035 15.2775 4.28614 15.4811C5.14266 16.1978 6.12662 16.605 7.23823 16.7027C7.29565 16.0084 7.43144 15.3299 7.64542 14.6668Z"
									fill="white"
								/>
							</svg>
							<Link className="text-sm font-medium lowercase" href="/casinos">
								Casinos
							</Link>
						</div>
						<div className="flex flex-col items-center opacity-80">
							<svg
								className="grid h-5 w-5 place-items-center"
								width="22"
								height="13"
								viewBox="0 0 22 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect y="11" width="22" height="1.5" rx="0.75" fill="white" />
								<rect y="5.5" width="22" height="1.5" rx="0.75" fill="white" />
								<rect width="22" height="1.5" rx="0.75" fill="white" />
							</svg>
							<span className="text-sm font-medium lowercase">Menu</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
