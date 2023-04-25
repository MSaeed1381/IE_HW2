import BaseUserSchema from "./_core-user.js";

export default mongoose => BaseUserSchema(mongoose).discriminator("professors", mongoose.Schema({
    college: {
        type: String,
        trim: true,
    },
    field: {
        type: String,
        trim: true,
    },
    rank: {
        type: String,
        trim: true,
    },
}));
