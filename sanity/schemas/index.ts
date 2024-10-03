import { pageType, siteType } from './documents'
import { casinoListItemField, metadataField } from './fields'
import { casinoModule, sampleModule } from './modules'

// Add fields here...
const fields = [metadataField, casinoListItemField]

// Add modules here...
const modules = [sampleModule, casinoModule]

// Add documents here...
const documents = [siteType, pageType]

export const schemaTypes = [...fields, ...modules, ...documents]
