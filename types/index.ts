import { Document } from 'mongoose';

export interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	name: string;
	bio?: string;
}

export interface IPost extends Document {
	title: string;
	content: string;
	createdAt: string;
	blog: IBlog['_id'];
}

export interface IBlog extends Document {
	title: string;
	user: IUser;
	posts: IPost[];
	createdAt: string;
}
