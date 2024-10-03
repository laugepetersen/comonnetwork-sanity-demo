import * as Sanity from '@/types/sanity'
import * as _Sanity from '@sanity/types'
import React from 'react'
import Img from '../Img'
import Link from 'next/link'

interface CasinoModuleProps {
	module: Sanity.CasinoModule
}

export default function CasinoModule({ module }: CasinoModuleProps) {
	return (
		<div className="container">
			<div className="grid gap-3">
				{module.casinos?.map((casino, i) => (
					<div className="grid gap-y-3 rounded-sm border border-white/5 bg-white/5 p-3">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-x-3">
								<Img
									image={casino.logo as _Sanity.Image}
									className="h-[60px] w-[80px] rounded-sm object-cover"
								/>
								<div className="flex flex-col gap-0">
									<div className="flex items-center gap-1">
										<div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-black">
											<span className="font-bold leading-none">{i + 1}</span>
										</div>
										<h3 className="text-lg font-bold">{casino.title}</h3>
									</div>
									<p className="text-sm capitalize underline underline-offset-2 opacity-80">
										Læs anmeldelse
									</p>
								</div>
							</div>
							<div>rating</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="grid gap-1 text-sm text-white/80">
								{casino.highlights?.map((highlight) => (
									<div>
										<span className="text-[#83E952]">✓</span> {highlight}
									</div>
								))}
							</div>
							<div className="grid grid-cols-2 gap-1">
								<div className="h-6 w-9 rounded-sm bg-white/20"></div>
								<div className="h-6 w-9 rounded-sm bg-white/20"></div>
								<div className="h-6 w-9 rounded-sm bg-white/20"></div>
								<div className="grid h-6 w-9 place-items-center rounded-sm">
									<span className="text-sm font-medium opacity-80">+12</span>
								</div>
							</div>
						</div>
						<div className="rounded-sm bg-gradient-to-br from-[#EB5343] to-[#FF814B] p-[1px]">
							<div className="rounded-t-[1px] bg-[#43383E]">
								<div className="grid h-11 place-items-center p-2 text-center text-lg font-medium">
									{casino.offer}
								</div>
							</div>
							<Link
								href={casino.url || ''}
								target="_blank"
								className="grid h-11 place-items-center bg-gradient-to-br from-[#EB5343] to-[#FF814B] p-2 font-medium"
							>
								Spil nu
							</Link>
						</div>
						<div>
							<p className="text-justify text-[10px] font-light leading-tight opacity-40">
								{casino.terms}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
