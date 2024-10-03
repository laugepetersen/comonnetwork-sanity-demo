import imageUrlBuilder from '@sanity/image-url'
import client from './client'
import * as Sanity from '@sanity/types'

const builder = imageUrlBuilder(client)

export function urlFor(image: Partial<Sanity.Image>) {
	return builder.image(image)
}
