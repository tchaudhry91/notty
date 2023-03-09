import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals }) => {
	const session = await locals.validate();
	if (!session) {
		throw error(401, 'Unauthorized');
	}
	const notes = await prisma.note.findMany({
		where: {
			authorId: session.userId
		},
		select: {
			id: true,
			title: true
		}
	});
	return new Response(JSON.stringify(notes));
};

export const POST: RequestHandler = async ({ locals, request }) => {
	const { session, user } = await locals.validateUser();
	if (!session) {
		throw error(401, 'Unauthorized');
	}
	const data = await request.json();
	try {
		let tags = [];
		if (data.tags) {
			tags = data.tags;
		}
		const n = await prisma.note.create({
			data: {
				authorId: user.userId,
				title: data.title,
				content: data.content,
				tags: {
					create: tags.map((tag: string) => ({ name: tag }))
				}
			}
		});
		return new Response(JSON.stringify(n));
	} catch (e) {
		console.log(e);
		throw error(500, 'Internal Server Error');
	}
};
