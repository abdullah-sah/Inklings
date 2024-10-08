import mongoose, { Model, Schema } from 'mongoose';
import { IBlog } from 'types';

const BlogSchema: Schema<IBlog> = new Schema({
	title: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

const Blog: Model<IBlog> =
	mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
