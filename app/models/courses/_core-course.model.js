import Joi from "joi";

// base class for course that approved and semester course extends this.
const baseCoreCourseOption = {
    discriminator: "courses",
    collection: "courses",
    timestamps: true
};

export default (mongoose) =>
    // dependency injection and singleton
    mongoose.models.courses ||
    mongoose.model(
        "courses",
        mongoose.Schema(
            {
                courseName: {
                    type: String,
                    trim: true,
                    unique: true,
                },

                // enum for validation
                field: Joi
                    .string()
                    .trim()
                    .required()
                    .valid("Literature", "CE", "Computer Engineering", "Pharmacy", "Mathematics",
                        "Physics", "Music", "Agricultural Chemistry", "Biology"),

                // relation
                prerequisites: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "courses",
                        default: []
                    },
                ],
                corequisites: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "courses",
                        default: []
                    },
                ],
                unit: Joi
                    .number()
                    .min(0)
                    .max(4)
                    .required(),
            },
            baseCoreCourseOption
        )
    );
