import db from "../../models/index.js";
import createResponse from "../../utils/create-response.js";
import existAllParams from "../../utils/exist-all-params.js";

const Course = db.courses;
const ApprovedCourse = db.approvedCourses;
const SemesterCourses = db.semesterCourses;

const requiredApprovedCourseParams = [
    "courseName",
    "prerequisites",
    "corequisites",
    "unit",
];
const requiredSemesterCourseParams = requiredApprovedCourseParams.concat([
    "classDate",
    "examDate",
    "examLocation",
    "courseProfessor",
    "capacity",
    "educationSemester",
]);

export default class CourseController {
    static async create(req, res) {
        let courseType = req.body.courseType;
        if (!courseType)
            return res
                .status(404)
                .json(createResponse(false, "courses type not found."));

        if (courseType === "approved") {
            if (!existAllParams(requiredApprovedCourseParams, req.body)) {
                return res
                    .status(400)
                    .json(createResponse(true, "Content is incomplete!"));
            }

            try {
                const { courseName, prerequisites, corequisites, unit } =
                    req.body;
                const course = new ApprovedCourse({
                    courseName,
                    prerequisites,
                    corequisites,
                    unit,
                });
                const data = await course.save(course);
                res.status(201).json(
                    createResponse(true, "Course Created Successfully!", data)
                );
            } catch (err) {
                res.status(500).json(
                    createResponse(
                        false,
                        err.message ||
                            "Some error occurred while creating the Course."
                    )
                );
            }
        } else if (courseType === "semester") {
            if (!existAllParams(requiredSemesterCourseParams, req.body)) {
                return res
                    .status(400)
                    .json(createResponse(true, "Content is incomplete!"));
            }

            try {
                const {
                    courseName,
                    prerequisites,
                    corequisites,
                    unit,
                    classDate,
                    examDate,
                    examLocation,
                    courseProfessor,
                    capacity,
                    educationSemester,
                } = req.body;

                const course = new SemesterCourses({
                    courseName,
                    prerequisites,
                    corequisites,
                    unit,
                    classDate,
                    examDate,
                    examLocation,
                    courseProfessor,
                    capacity,
                    educationSemester,
                });

                const data = await course.save(course);
                res.status(201).json(
                    createResponse(true, "Course Created Successfully!", data)
                );
            } catch (err) {
                res.status(500).json(
                    createResponse(
                        false,
                        err.message ||
                            "Some error occurred while creating the Course."
                    )
                );
            }
        } else
            return res
                .status(400)
                .json(createResponse(false, "courses type is not correct."));
    }

    static async update(req, res) {
        if (!Object.keys(req.body).length) {
            return res
                .status(400)
                .json(createResponse(false, "Content can not be empty!"));
        }
        try {
            const id = req.params.id;
            const data = await Course.findByIdAndUpdate(id, req.body, {
                useFindAndModify: true,
            });
            if (data)
                return res
                    .status(200)
                    .json(createResponse(true, "Student Updated Successfully"));
            return res
                .status(404)
                .json(createResponse(false, "Student not found"));
        } catch (err) {
            return res
                .status(500)
                .json(
                    false,
                    err.message ||
                        "Some error occurred while updating the Student."
                );
        }
    }

    static async delete(req, res) {
        const id = req.params.id;
        try {
            const data = await Course.findByIdAndRemove(id);
            if (data)
                return res
                    .status(200)
                    .json(createResponse(true, "Course Deleted Successfully"));
            return res
                .status(404)
                .json(createResponse(false, "Course not found"));
        } catch (err) {
            res.status(500).json(
                createResponse(
                    false,
                    err.message ||
                        "Some error occurred while deleting the Course."
                )
            );
        }
    }
    static async getAllCourses(req, res) {
        try {
            const data = await Course.find();
            return res
                .status(200)
                .json(createResponse(true, "get all Courses", data));
        } catch (err) {
            return res
                .status(500)
                .json(
                    createResponse(
                        false,
                        err.message || `Could not get all Courses.`
                    )
                );
        }
    }
    static async getCourseById(req, res) {
        const id = req.params.id;
        try {
            const data = await Course.findById(id);
            if (data)
                return res
                    .status(200)
                    .json(
                        createResponse(true, `get Course with id ${id}.`, data)
                    );
            return res
                .status(404)
                .json(createResponse(false, `Course with id ${id} not found.`));
        } catch (err) {
            return res
                .status(500)
                .json(
                    createResponse(
                        false,
                        err.message || `Could not get the Course.`
                    )
                );
        }
    }
}
