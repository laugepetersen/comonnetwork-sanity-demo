import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
// import { parseBody } from 'next-sanity/webhook'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

export async function POST(req: NextRequest) {
	try {
		const signature = req.headers.get(SIGNATURE_HEADER_NAME)
		if (!signature) {
			return NextResponse.json({
				status: 401,
				success: false,
				message: 'Signature is null',
			})
		}
		const body = await req.json()
		if (
			!(await isValidSignature(
				body,
				signature,
				process.env.SANITY_HOOK_SECRET!,
			))
		) {
			return NextResponse.json({
				status: 401,
				success: false,
				message: 'Invalid signature',
			})
		}

		if (!body?._type) {
			return new Response('Bad Request', { status: 400 })
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
