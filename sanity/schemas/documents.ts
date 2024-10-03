import { defineField, defineType } from 'sanity'
import { VscHome, VscEyeClosed, VscQuestion, VscEdit } from 'react-icons/vsc'
import { sampleModule, casinoModule } from './modules'

export const siteType = defineType({
	name: 'site',
	title: 'Site settings',
	type: 'document',
	groups: [
		{ name: 'general', title: 'General', default: true },
		{ name: 'navigation', title: 'Navigation' },
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			group: 'general',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'logo',
			type: 'image',
			group: 'general',
			options: {
				metadata: ['lqip'],
			},
		}),
		defineField({
			name: 'Favicon',
			type: 'image',
			group: 'general',
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Site settings',
		}),
	},
})

export const pageType = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	groups: [
		{ name: 'content', default: true },
		{ name: 'seo', title: 'SEO' },
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			group: 'content',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'modules',
			description: 'Page content',
			type: 'array',
			of: [{ type: casinoModule.name }],
			group: 'content',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'seo',
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'metadata.slug.current',
			media: 'metadata.image',
			noindex: 'metadata.noIndex',
		},
		prepare: ({ title, slug, media, noindex }) => ({
			title,
			subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
			media:
				media ||
				(slug === 'index' && VscHome) ||
				(slug === '404' && VscQuestion) ||
				(['blog', 'blog/*'].includes(slug) && VscEdit) ||
				(noindex && VscEyeClosed),
		}),
	},
})
