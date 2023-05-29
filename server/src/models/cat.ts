import { ICat } from './../types/cat';
import { model, Schema } from 'mongoose';

const catSchema: Schema = new Schema({    
    name: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

}, { timestamps: true })


export default model<ICat>('Cat', catSchema)