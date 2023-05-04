import professorRoute from "./professor.route.js";
import studentRoute from "./student.route.js";
import educationManagerRoute from "./manager.route.js";
import courseRoute from "./course.route.js";
import loginRoute from "./login.route.js"
import roleRoute from "./role.route.js";
import adminRoute from "./admin.route.js";

import Logger from "../utils/logger.js"


// break our app into separate mini-app
export default app => {
    app.use((req, res, next) => {
        res.on("finish", ()=>{
            Logger(req, res)
        })
        next()
    });

    app.use(loginRoute);
    app.use(professorRoute);
    app.use(studentRoute);
    app.use(educationManagerRoute);
    app.use(courseRoute);
    app.use(roleRoute);
    app.use(adminRoute);

}

