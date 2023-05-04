
export default mongoose => mongoose.model("roles", mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
    }
}));
