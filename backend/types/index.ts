import { Document } from 'mongoose';

export interface IUser extends Document {
	email: string;
	password: string;
	name: string;
	bio?: string;
}

export interface IPost extends Document {
	title: string;
	content: string;
	createdAt: Date;
	blog: IBlog['_id'];
}

export interface IBlog extends Document {
	title: string;
	user: IUser['_id'];
	posts: IPost['_id'][];
}
