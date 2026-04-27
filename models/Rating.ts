import mongoose from "mongoose";



export interface IRating {
    procutID: mongoose.Schema.Types.ObjectId,
    userID: mongoose.Schema.Types.ObjectId,
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
        ref: "User",
        required: true

    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
})




export const Rating = mongoose.models.Rating || mongoose.model<IRating>("rating", RatingSchema)