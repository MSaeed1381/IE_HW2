import db from '../../models/index.js'
import createResponse from "../../utils/create-response.js";

const Student = db.students;

export default class StudentController {
    static async update(req, res){
        if (!Object.keys(req.body).length) {
            return res.status(400).json(createResponse(false, "Content can not be empty!"));
        }
        try {
            const id = req.id;
            const data = await Student.findByIdAndUpdate(id, req.body, {useFindAndModify: true});
            if (data)
                return res.status(200).json(createResponse(true, "Student Updated Successfully"));
            return res.status(404).json(createResponse(false, "Student not found"));
        }catch (err) {
            return res.status(500).json(false,
                err.message || "Some error occurred while updating the Student.")
        }
    }

}
