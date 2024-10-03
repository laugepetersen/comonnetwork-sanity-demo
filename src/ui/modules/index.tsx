import * as Sanity from '@/types/sanity'
import CasinoModule from './CasinoModule'

interface Module {
	_key: string
	_type: any
}

export default function Modules({ modules }: { modules?: Module[] }) {
	return (
		<>
			{modules?.map((module) => {
				switch (module._type) {
					case 'casino-module':
						return <CasinoModule key={module._key} module={module} />
					default:
						return (
							<div key={module._key}>
								Module component for `{module._type}` doesn't exist.
							</div>
						)
				}
			})}
		</>
	)
}
