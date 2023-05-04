import mongoose from "mongoose";

import config from "../config/db.config.js";
import students from "./student.model.js";
import professors from "./professor.model.js";
import semesterCourses from "./semester-course.model.js";
import itManagers from "./it-manager.model.js";
import users from "./_core-user.model.js"
import courses from "./_core-course.model.js"
import educationManagers from "./education-manager.model.js";
import approvedCourses from "./approved-course.model.js";
import roles from "./role.model.js";


// config the database
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = config.url;

// entities (dependency injection)
// users
db.users = users(mongoose);
db.courses = courses(mongoose);
db.students = students(mongoose);
db.professors = professors(mongoose);
db.itManagers = itManagers(mongoose);
db.educationManagers = educationManagers(mongoose);

// courses
db.courses = courses(mongoose);
db.approvedCourses = approvedCourses(mongoose);
db.semesterCourses = semesterCourses(mongoose);

// roles
db.roles = roles(mongoose);

export default db;
