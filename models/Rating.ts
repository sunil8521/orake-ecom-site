import mongoose from "mongoose";



export interface IRating {
    procutID: mongoose.Schema.Types.ObjectId,
    userID?: mongoose.Schema.Types.ObjectId,
    name?: string,
    email?: string,
    text: string,
    rating: number
}


const RatingSchema = new mongoose.Schema<IRating>({
    procutID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
}, { timestamps: true })




export const Rating = mongoose.models.Rating || mongoose.model<IRating>("Rating", RatingSchema)