import { NextResponse } from 'next/server';
import connectToDatabase from 'backend/lib/mongodb';
import Blog from 'backend/models/Blog';

// fetch all blogs (GET request)
export async function GET() {
	try {
		await connectToDatabase();
		const blogs = await Blog.find().populate('user').exec(); // fetching blogs with user info
		return NextResponse.json(blogs);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch blogs' },
			{ status: 500 }
		);
	}
}

// create a new blog (POST request). Pass in 'title' and 'userId' to req.body
export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { title, userId } = body;

		if (!title || !userId) {
			return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
		}

		await connectToDatabase();

		const blog = new Blog({ title, user: userId });

		await blog.save();

		return NextResponse.json(blog, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to create blog' },
			{ status: 500 }
		);
	}
}
