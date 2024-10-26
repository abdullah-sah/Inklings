import { NextResponse } from 'next/server';
import connectToDatabase from 'backend/lib/mongodb';
import User from 'backend/models/User';

// fetch all users (GET request)
export async function GET() {
	try {
		await connectToDatabase();
		const users = await User.find().exec();
		return NextResponse.json(users);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch users' },
			{ status: 500 }
		);
	}
}

// create a new user (POST request). Pass in 'username', 'email', 'password', and 'name' to req.body
export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { username, email, password, name } = body;

		if (!email || !password || !username) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		await connectToDatabase();

		const user = new User({
			username,
			email,
			password,
			name,
		});

		await user.save();

		return NextResponse.json(user, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to create user' },
			{ status: 500 }
		);
	}
}
