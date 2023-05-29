import { Document } from 'mongoose';

export interface ICat extends Document {
    name: string
    breed: string
    weight: number
};