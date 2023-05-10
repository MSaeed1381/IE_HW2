import BaseUserSchema from "./_core-user.model.js";

export default (mongoose) =>
    BaseUserSchema(mongoose).discriminator(
        "students",
        mongoose.Schema({
            degree: {
                type: String,
                trim: true,
            },
            incomingYear: {
                type: Number,
            },
            incomingSemester: {
                type: Number,
            },
            gradeAverage: {
                type: Number,
            },
            college: {
                type: String,
                trim: true,
            },
            field: {
                type: String,
                trim: true,
            },
            courses: [{
               type: mongoose.Schema.Types.ObjectId,
               ref: 'courses',
            }],
        })
    );
