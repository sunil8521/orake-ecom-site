import mongoose, { Mongoose } from "mongoose";
import slugify from "slugify"



export interface IImage {
    publicId: string;
    url: string;
}

export interface IProduct {
    name: string,
    slug: string,
    description: string,
    price: number,
    oldPrice: number,
    discount: number,
    size: string,
    image: IImage,
    subImages?: IImage[],
    stock: number,
    numReviews: number,
    rating?: number,
    isFeatured: boolean
}
export interface ProductType extends IProduct {
    _id: string
}

const ProcutSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    size: {
        type: String,
        default: "250ML"
    },
    image: {
        publicId: { type: String },
        url: { type: String, required: true }
    },
    subImages: {
        type: [{
            publicId: { type: String },
            url: { type: String, required: true }
        }],
        validate: [function (val: any[]) {
            return val.length <= 5;
        }, 'Sub images exceed the limit of 5']
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

export const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", ProcutSchema)