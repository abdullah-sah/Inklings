import mongoose, { Mongoose } from 'mongoose';

// Declare a global type for caching the database connection in the Node.js global scope
declare global {
	var mongoose: {
		conn: Mongoose | null;
		promise: Promise<Mongoose> | null;
	};
}

// Retrieve MongoDB connection string from the environment
const MONGODB_URI = `mongodb+srv://rickastley:${process.env.DB_PASSWORD}@cluster0.na8yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local'
	);
}

// Global caching of the connection
let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<Mongoose> {
	// If a connection is already established, return it
	if (cached.conn) {
		return cached.conn;
	}

	// If there's no promise, create a new connection promise
	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI)
			.then((mongooseInstance) => mongooseInstance);
	}

	// Cache the resolved connection and return it
	cached.conn = await cached.promise;
	return cached.conn;
}

export default connectToDatabase;
