import mongoose from 'mongoose'
const {Schema} = mongoose

const UserSchema = new Schema({
    googleId: String
})

export default mongoose.model("User", UserSchema)