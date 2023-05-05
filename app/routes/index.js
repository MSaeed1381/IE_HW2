import professorRoute from "./admin/professor.route.js";
import studentRoute from "./admin/student.route.js";
import educationManagerRoute from "./admin/manager.route.js";
import courseRoute from "./manager/course.route.js";
import loginRoute from "./login.route.js";
import roleRoute from "./admin/role.route.js";
import adminRoute from "./admin.route.js";

import Logger from "../utils/logger.js";

// break our app into separate mini-app
export default (app) => {
    app.use((req, res, next) => {
        res.on("finish", () => {
            Logger(req, res);
        });
        next();
    });

    app.use(loginRoute);
    app.use(professorRoute);
    app.use(studentRoute);
    app.use(educationManagerRoute);
    app.use(courseRoute);
    app.use(roleRoute);
    app.use(adminRoute);
};
