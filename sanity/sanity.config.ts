import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import structure from './src/structure'
import { presentationTool } from 'sanity/presentation'
import { locations } from './src/presentation'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { sanitypressGuideWidget } from './src/sanitypressGuideWidget'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './schemas'

import { isDev } from 'sanity'

const BASE_URL = isDev
	? 'http://localhost:3000'
	: process.env.NEXT_PUBLIC_BASE_URL!

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2rsb8h24'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''

const singletonTypes = ['site']

export default defineConfig({
	name: 'default',
	title: 'SanityPress',

	projectId: projectId,
	dataset: dataset,
	basePath: '/admin',

	plugins: [
		structureTool({
			name: 'content',
			title: 'Content',
			structure,
		}),
		presentationTool({
			name: 'editor',
			title: 'Editor',
			previewUrl: {
				draftMode: {
					enable: `${BASE_URL}/api/draft`,
				},
			},
			resolve: { locations },
		}),
		dashboardTool({
			name: 'deployment',
			title: 'Deployment',
			widgets: [vercelWidget()],
		}),
		dashboardTool({
			name: 'info',
			title: 'Info',
			widgets: [
				projectInfoWidget(),
				projectUsersWidget(),
				sanitypressGuideWidget(),
			],
		}),
		visionTool(),
		codeInput(),
	],

	tasks: { enabled: false },
	scheduledPublishing: { enabled: false },

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) =>
							action &&
							['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},
})
