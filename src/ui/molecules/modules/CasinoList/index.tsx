import * as Sanity from '@/types/sanity'
import * as _Sanity from '@sanity/types'
import React from 'react'
import Img from '@/ui/atoms/Img'
import Link from 'next/link'
import Icon from '@/ui/atoms/Icon'

interface CasinoModuleProps {
	module: Sanity.CasinoModule
}

export default function CasinoList({ module }: CasinoModuleProps) {
	return (
		<div className="container">
			<div className="grid gap-3">
				{module.casinos?.map((casino, i) => {
					const visits = 448
					const stars = casino.stars || 0
					const reviewUrl = 'https://www.google.dk'
					return (
						<div
							key={i}
							className="grid gap-y-3 rounded-sm border bg-white p-3 text-dark"
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-x-3">
									<Img
										image={casino.logo as _Sanity.Image}
										className="h-[60px] w-[80px] rounded-sm object-cover"
									/>
									<div className="flex flex-col">
										<div className="-mb-0.5 flex items-center gap-1">
											<div className="relative flex h-5 w-5 rounded-sm bg-dark text-white">
												<span className="block font-medium absolute-center">
													{i + 1}
												</span>
											</div>
											<h3 className="text-lg font-medium">{casino.title}</h3>
										</div>
										<a
											className="font-regular-medium text-sm capitalize text-light-blue underline underline-offset-2 opacity-80"
											href={reviewUrl}
										>
											Læs anmeldelse
										</a>
									</div>
								</div>
								<div className="flex flex-col items-end gap-0">
									<p className="-mb-0.5 leading-none">
										<span className="text-lg font-medium">
											{stars.toFixed(1).replace('.', ',')}
										</span>
										&nbsp;
										<span className="font-regular-medium text-sm opacity-60">
											/ 5
										</span>
									</p>
									<div className="flex gap-0.5">
										{Array.from({ length: 5 }).map((_, i) => (
											<Icon
												key={i}
												size={13}
												icon={'star'}
												starType={i + 1 > Math.ceil(stars) ? 'outline' : 'fill'}
											/>
										))}
									</div>
								</div>
							</div>
							<div className="h-[1px] w-full bg-dark/10"></div>
							<div className="flex items-center justify-between">
								<div className="grid gap-0.5 text-sm">
									{casino.highlights?.map((highlight, i) => (
										<div
											key={i}
											className="font-regular-medium flex items-center gap-1.5"
										>
											<span className="text-green-light-mode">✓</span>
											<span>{highlight}</span>
										</div>
									))}
								</div>
								<div className="flex flex-col items-end">
									<div className="-mb-1 flex items-center gap-1">
										<p className="font-medium text-light-blue">{visits}</p>
										<Icon icon="eye" className="text-light-blue" />
									</div>
									<p className="font-regular-medium text-sm opacity-60">
										Besøgte
									</p>
								</div>
							</div>
							<div className="relative">
								<Link
									href={casino.url || '#'}
									target="_blank"
									className="absolute left-0 top-0 z-10 h-full w-full"
								/>

								<div className="-mb-[1px] grid h-11 place-items-center rounded-t-md border border-dark-green-light-mode bg-green-light-mode/10 p-2 font-medium">
									<p className="text-lg">{casino.offer}</p>
								</div>

								<Link
									href={casino.url || '#'}
									target="_blank"
									className="flex h-11 items-center justify-center gap-1 rounded-b-md border border-dark-green-light-mode bg-green-light-mode p-2 font-medium text-white"
								>
									<span>Spil her</span>
									<span className="flex items-center">
										<Icon
											size={10}
											icon="arrow"
											className="animate-[fade-in-out_1s_ease-in-out_infinite]"
										/>
										<Icon
											size={10}
											icon="arrow"
											className="-ml-1 animate-[fade-in-out_1s_ease-in-out_infinite_200ms]"
										/>
									</span>
								</Link>
							</div>
							<div>
								<p className="text-justify text-[10px] leading-none opacity-60">
									{casino.terms}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
