import mongoose, { Model, Schema } from 'mongoose';
import { IUser } from 'types';

const UserSchema: Schema<IUser> = new Schema({
	username: { type: String, requred: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String },
	bio: { type: String },
});

const User: Model<IUser> =
	mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
