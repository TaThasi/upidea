import mongoose, { Schema, Document } from "mongoose";

export interface IdeaInfo extends Document {
    title: string;
    problems: string;
    solutions: string;
    description: string;
    tags: string[];
    creator: {
        id: string;
        name: string;
        image: string;
    };
}

const IdeaInfoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    problems: {
        type: String,
        required: true,
    },
    solutions: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    creator: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
});

const IdeaInfoModel = mongoose.models.IdeaInfo || mongoose.model<IdeaInfo>("IdeaInfo", IdeaInfoSchema);

export default IdeaInfoModel;
