import { TfiCheckBox } from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'

export const metadataField = defineType({
	name: 'metadata',
	title: 'Metadata',
	description: 'For search engines',
	type: 'object',
	fields: [
		defineField({
			name: 'slug',
			type: 'slug',
			description: 'URL path / permalink. Use "index" for the homepage.',
			options: {
				source: (doc: any) => doc.title || doc.metadata.title,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.max(60).warning(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 3,
			validation: (Rule) => Rule.max(160).warning(),
		}),
		defineField({
			name: 'image',
			description: 'Used for social sharing previews',
			type: 'image',
		}),
		defineField({
			name: 'noIndex',
			description: 'Prevent search engines from indexing this page',
			type: 'boolean',
			initialValue: false,
		}),
	],
})

export const casinoListItemField = defineType({
	name: 'casino-list-item',
	title: 'Casino',
	type: 'object',
	fields: [
		defineField({
			title: 'Casino Name',
			name: 'title',
			type: 'string',
		}),
		defineField({
			title: 'Casino Logo',
			name: 'logo',
			type: 'image',
		}),
		defineField({
			title: 'Affiliate URL',
			name: 'url',
			type: 'url',
		}),
		defineField({
			title: 'Highlights',
			icon: TfiCheckBox,
			name: 'highlights',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			title: 'Offer',
			name: 'offer',
			type: 'string',
		}),
		defineField({
			title: 'Terms',
			name: 'terms',
			type: 'text',
		}),
	],
})
