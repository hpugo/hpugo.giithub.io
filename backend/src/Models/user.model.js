import { model, Schema } from 'mongoose';

export const UserSchema = new Schema (
{
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, requried: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
},
{
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
}
);