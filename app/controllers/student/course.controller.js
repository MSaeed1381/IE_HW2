import db from "../../models/index.js";
import createResponse from "../../utils/create-response.js";
import existAllParams from "../../utils/exist-all-params.js";

const Course = db.courses;

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
    static async getAllCourses(req, res) {
        // TODO
    }

    static async getCourseById(req, res) {
        // TODO
    }
}
