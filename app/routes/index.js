import professorRoute from "../routes/professor.route.js";
import studentRoute from "../routes/student.route.js";
import educationManagerRoute from "../routes/manager.route.js";
import courseRoute from "../routes/course.route.js";

// break our app into separate mini-app
export default app => {
    app.use(professorRoute);
    app.use(studentRoute);
    app.use(educationManagerRoute);
    app.use(courseRoute);
}

