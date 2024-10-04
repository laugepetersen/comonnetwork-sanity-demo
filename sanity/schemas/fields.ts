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
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: 'Stars',
			name: 'stars',
			type: 'number',
			validation: (rule) =>
				rule
					.required()
					.min(1)
					.max(5)
					.warning('Needs to be between 1-5')
					.precision(1),
		}),
		defineField({
			title: 'Casino Logo',
			name: 'logo',
			type: 'image',
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: 'Affiliate URL',
			name: 'url',
			type: 'url',
			validation: (rule) => rule.required(),
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
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: 'Terms',
			name: 'terms',
			type: 'text',
		}),
	],
})
