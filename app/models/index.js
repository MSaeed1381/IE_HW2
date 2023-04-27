import mongoose from "mongoose";

import config from "../config/db.config.js";
import students from "./student.model.js";
import professors from "./professor.model.js";
import semesterCourses from "./semester-course.model.js";
import itManagers from "./it-manager.model.js";
import educationManagers from "./education-manager.model.js";
import approvedCourses from "./approved-course.model.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.url;

// entities (dependency injection)
db.students = students(mongoose);
db.professors = professors(mongoose);
db.semesterCourses = semesterCourses(mongoose);
db.itManagers = itManagers(mongoose);
db.educationManagers = educationManagers(mongoose);
db.approvedCourses = approvedCourses(mongoose);

export default db;
