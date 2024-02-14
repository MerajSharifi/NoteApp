import {Schema, model} from "mongoose"

const noteSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true
    },

    text: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: new Date()
    }
})

export default model('Noted', noteSchema)