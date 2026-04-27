import mongoose, { Mongoose } from "mongoose";
import slugify from "slugify"



export interface IProduct {
    name: string,
    slug: string,
    description: string,
    price: number,
    image: string,
    stock: number,
    numReviews: number,
    isFeatured: boolean
}


const ProcutSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    ,
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },

    numReviews: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false

    }
})

ProcutSchema.pre("save", function () {
    if (!this.isModified("slug")) return;
    this.slug = slugify(this.slug, { lower: true, strict: true })
})



export const Product = mongoose.models.Product || mongoose.model<IProduct>("product", ProcutSchema)