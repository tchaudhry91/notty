import { json, type RequestHandler } from '@sveltejs/kit';
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
	return json(notes);
};
