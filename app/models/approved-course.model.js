
export default mongoose => mongoose.models.approvedCourses
    || mongoose.model("approvedCourses", mongoose.Schema({
    courseName: {
        type: String,
        trim: true,
    },
    prerequisites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "approvedCourses"
    }],
    corequisites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "approvedCourses"
    }],
    unit: {
        type: Number,
    },
}));
