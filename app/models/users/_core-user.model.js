
const baseCoreUserOption = {
    discriminator: "users",
    collection: "users",
};

export default mongoose => mongoose.models.BaseUserSchema || mongoose.model("BaseUserSchema", mongoose.Schema(
    {
        full_name: {
            type: String,
            trim: true,
        },
        user_id: {
            type: Number,
            unique: true,
        },
        password_hash: {
            type: String,
        },
        email: {
            type: String,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roles',
        }
    },
    baseCoreUserOption
));
