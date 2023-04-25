import ApprovedCourse from "./approved-course.model.js";

export default mongoose => ApprovedCourse(mongoose).discriminator(
    "semester courses",
    mongoose.Schema({
        classDate: {
            type: Date,
            default: Date.now(),
        },
        examDate: {
            type: Date,
            default: Date.now(),
        },
        examLocation: {
            type: String,
            trim: true,
        },
        courseProfessor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "professors",
        },
        capacity: {
            type: Number,
        },
        educationSemester: {
            type: String,
        }
        },
    )
);
