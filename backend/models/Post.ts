import mongoose, { Model, Schema } from 'mongoose';
import { IPost } from 'types';

const PostSchema: Schema<IPost> = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	createdAt: { type: String, default: new Date().toISOString() },
	blog: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
});

const Post: Model<IPost> =
	mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;
