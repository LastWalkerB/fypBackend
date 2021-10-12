import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullName: { type: String, required: [true] },
    contactNumber: { type: String, required: [true] },
    email: { type: String, required: [true] },
    password: { type: String, required: [true] },
    cnic: { type: String, required: [true] },
    dateOfBirth: { type: String, required: [true] },
    address: { type: String, required: [true] },
    gender: { type: String, required: [true] }
})

const providerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullName: { type: String, required: [true] },
    contactNumber: { type: String, required: [true] },
    email: { type: String, required: [true] },
    password: { type: String, required: [true] },
    cnic: { type: String, required: [true] },
    dateOfBirth: { type: String, required: [true] },
    address: { type: String, required: [true] },
    gender: { type: String, required: [true] }
})

const volunteerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullName: { type: String, required: [true] },
    contactNumber: { type: String, required: [true] },
    email: { type: String, required: [true] },
    password: { type: String, required: [true] },
    cnic: { type: String, required: [true] },
    dateOfBirth: { type: String, required: [true] },
    address: { type: String, required: [true] },
    gender: { type: String, required: [true] },
    role: { type: String, enum: ['guest', 'registered'], required: [true] }
})

const pickupSchema = new Schema({
    _id: Schema.Types.ObjectId,
    provider: { type: ObjectId, ref: 'provider', required: [true] },
    admin: { type: ObjectId, ref: 'admin' },
    volunteer: { type: ObjectId, ref: 'volunteer' },
    pickupAddress: { type: String, required: [true, "the address is missing"] },
    deliveryAddress: { type: String },
    placementTime: { type: Date },
    acceptanceTime: { type: Date },
    pickUpTime: { type: Date },
    deliveryTime: { type: Date },
    amountOfFood: { type: String },
    typeOfFood: { type: String },
    status: { type: String }
})

const adminSchema = mongoose.model('admin', adminSchema);
const providerSchema = mongoose.model('provider', providerSchema);
const volunteerSchema = mongoose.model('volutneer', volunteerSchema);
const pickupSchema = mongoose.model('order', pickupSchema);