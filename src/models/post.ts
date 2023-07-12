import { Schema, model, models } from "mongoose"



const PostSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "The title is required"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        unique: true,
        required: [true, "The text is required"],
        minLength: [300, "The text of the post must be at least 300 characters"],
        maxLength: [1500, "The text of the post must be at most 1500 characters"],
    },
    category: {
        type: String,
        enum: ['General', 'Nutrition', 'Strength', 'Technique'],
        required: 'This field is required.'
    },
    image: {
        type: String,
        required: 'This field is required.'
    },
    comments: {
        type: Array,
        required: false
    },
    likes: {
        type: Number,
    }
})

const Post = models.Post || model("Post", PostSchema);
export default Post;

