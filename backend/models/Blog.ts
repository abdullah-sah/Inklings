import mongoose, { Model, Schema } from 'mongoose';
import { IBlog, IUser } from 'types';

const BlogSchema: Schema<IBlog> = new Schema({
	title: { type: String, required: true },
	createdAt: {
		type: String,
		required: true,
		default: () => new Date().toISOString(),
	},
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

const Blog: Model<IBlog> =
	mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
