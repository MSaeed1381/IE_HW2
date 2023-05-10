import Joi from "joi";
const baseCoreUserOption = {
    discriminator: "users",
    collection: "users",
    timestamps: true
};

export default (mongoose) =>
    mongoose.models.BaseUserSchema ||
    mongoose.model(
        "BaseUserSchema",
        mongoose.Schema(
            {
                full_name: Joi.string()
                    .trim()
                    .required(),

                user_id: {
                    type: Number,
                    unique: true,
                    required: true,
                    index: true
                },

                password_hash: Joi.string()
                    .trim()
                    .required(),

                email: Joi.string()
                    .trim()
                    .required()
                    .email(),

                phone: Joi.string()
                    .trim()
                    .required(),

                role: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "roles",
                },
            },
            baseCoreUserOption
        )
    );
