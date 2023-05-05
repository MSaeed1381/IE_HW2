const baseCoreCourseOption = {
    discriminator: "courses",
    collection: "courses",
};

export default (mongoose) =>
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
                prerequisites: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "courses",
                    },
                ],
                corequisites: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "courses",
                    },
                ],
                unit: {
                    type: Number,
                },
            },
            baseCoreCourseOption
        )
    );
