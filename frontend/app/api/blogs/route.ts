import { NextResponse } from 'next/server';
import connectToDatabase from 'backend/lib/mongodb';
import Blog from 'backend/models/Blog';
import User from 'backend/models/User';
import Post from 'backend/models/Post';

// fetch all blogs or fetch a specific blog by passing 'user' param (GET request)
export async function GET(request: Request) {
	try {
		await connectToDatabase();

		// Extract the search parameters from the request URL
		const { searchParams } = new URL(request.url);
		const userId = searchParams.get('user');

		let blogs = userId
			? await Blog.find({ user: userId }).populate('user').exec()
			: await Blog.find().populate('user').exec();

		return NextResponse.json(blogs);
	} catch (error) {
		return NextResponse.json(
			{ error: `Failed to fetch blogs: ${error}` },
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
