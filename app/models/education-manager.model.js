import BaseUserSchema from "./_core-user.model.js";

export default mongoose => BaseUserSchema(mongoose).discriminator(
    "education managers",
    mongoose.Schema({
        college: {
            type: String,
            trim: true,
        },
    })
);
