import { NextResponse } from 'next/server';
import connectToDatabase from 'backend/lib/mongodb';
import User from 'backend/models/User';

// pass in username & password to req.body
export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { username, password } = body;

		if (!username || !password) {
			return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
		}

		await connectToDatabase();

		const user = await User.findOne({ username });
		if (!user) {
			return NextResponse.json(
				{ error: 'Couldnt find that user' },
				{ status: 404 }
			);
		}

		if (user.password === password) {
			return NextResponse.json(user);
		} else throw new Error('Incorrect password');
	} catch (err) {
		return NextResponse.json(
			{ error: `Couldn't sign you in. ${err}` },
			{ status: 500 }
		);
	}
}
