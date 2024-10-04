import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
// import { isValidSignature, SIGNATURE_HEADER_NAME, isValidRequest } from '@sanity/webhook'

export async function POST(req: NextRequest) {
	try {
		if (!process.env.SANITY_HOOK_SECRET) {
			return NextResponse.json({
				status: 401,
				success: false,
				message: 'No SANITY HOOK SECRET',
			})
		}

		const { isValidSignature, body } = await parseBody<{ _type: string }>(
			req,
			process.env.SANITY_HOOK_SECRET,
		)

		if (!isValidSignature) {
			const message = 'Invalid signature'
			return new NextResponse(
				JSON.stringify({ message, isValidSignature, body }),
				{
					status: 401,
				},
			)
		}

		if (!body) {
			return NextResponse.json({
				status: 400,
				message: 'no body',
				success: false,
			})
		}

		revalidateTag(body._type)
		return NextResponse.json({
			status: 200,
			revalidated: true,
			now: Date.now(),
			body,
			request: req.json(),
		})
	} catch (error: any) {
		console.error(error)
		return new Response(error.message, { status: 500 })
	}
}
