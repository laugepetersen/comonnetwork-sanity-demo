import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'

export const sampleModule = defineType({
	name: 'sample-module',
	title: 'Sample Module',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
	],
	preview: {
		select: {
			content: 'title',
			media: 'image',
		},
		prepare: ({ content, media }) => ({
			// title: getBlockText(content),
			title: content,
			subtitle: 'Sample Module',
			media,
		}),
	},
})

export const casinoModule = defineType({
	name: 'casino-module',
	title: 'Casino Listings',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	fields: [
		defineField({
			name: 'casinos',
			type: 'array',
			of: [{ type: 'casino-list-item' }],
		}),
	],
	preview: {
		select: {
			casinoCount: 'casinos',
			title: 'title',
		},
		prepare: ({ casinoCount }) => {
			const count = casinoCount.length
			const casinoNames = casinoCount
				.map((casino: any) => casino.title)
				.join(', ')
			return {
				title: `Casino Listings (${count})`,
				subtitle: casinoNames,
			}
		},
	},
})
