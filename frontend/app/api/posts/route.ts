import { NextResponse } from 'next/server';
import connectToDatabase from 'backend/lib/mongodb';
import Post from 'backend/models/Post';
import Blog from 'backend/models/Blog';

// fetch all posts (GET request)
export async function GET() {
	try {
		await connectToDatabase();
		const posts = await Post.find().populate('blog').exec(); // fetch posts with blog info
		return NextResponse.json(posts);
	} catch (error) {
		return NextResponse.json(
			{ error: `Failed to fetch posts: ${error}` },
			{ status: 500 }
		);
	}
}

// create a new post (POST request). Pass in 'title', 'content', and 'blogId' to req.body
export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { title, content, blogId } = body;

		if (!title || !content || !blogId) {
			return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
		}

		await connectToDatabase();

		const blog = await Blog.findById(blogId);
		if (!blog) {
			return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
		}

		const post = new Post({
			title,
			content,
			blog: blogId,
		});

		await post.save();

		blog.posts.push(post._id);
		await blog.save();

		return NextResponse.json(post, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to create post' },
			{ status: 500 }
		);
	}
}
