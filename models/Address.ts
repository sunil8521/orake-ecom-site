import mongoose from "mongoose";


export interface IAddress {
    userId: mongoose.Schema.Types.ObjectId
    fullName: string,
    phone: string,
    street: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    isDefault: boolean
}


const AddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        default: "india"
    },
    isDefault: {
        type: Boolean,
    }



})


export const Address = mongoose.models.Address || mongoose.model("Address", AddressSchema)