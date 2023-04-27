import db from '../models/index.js'
const Student = db.students;

export default class StudentController {
    static create(req, res){
        if (!req.body.full_name) { // TODO
            res.status(204).json({
                success: false,
                body: null,
                message: "Content can not be empty!"
            });
            return;
        }

        const student = new Student(req.body);

        // Save Professor in the database
        student
            .save(student)
            .then(data => {
                res.status(201).json({
                    success: true,
                    body: data,
                    message: "User Created Successfully"
                });
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    body: null,
                    message:
                        err.message || "Some error occurred while creating the User."
                });
            });
    }

    static update(req, res){
        if (!Object.keys(req.body).length) { // TODO
            res.status(400).json({
                success: false,
                body: null,
                message: "Content can not be empty!"
            });
            return;
        }
        const id = req.params.id;
        Student.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
            .then((data)=>{
                    if (!data){
                        res.status(404).json({
                            success: false,
                            body: null,
                            message: "Professor not found"
                        });
                        return;
                    }
                    res.status(200).json({
                        success: true,
                        body: req.body,
                        message: "User Updated Successfully"
                    });
                }
            )
            .catch((err)=>{
                res.status(500).json({
                    success: false,
                    body: null,
                    message: err.message || "Some error occurred while updating the Professor."
                })
            })
    }

    static delete(req, res){
        const id = req.params.id;

        Student.findByIdAndRemove(id)
            .then(data => {
                if (!data) {
                    res.status(404).json({
                        success: false,
                        body: null,
                        message: `Cannot delete Professor with id=${id}. Maybe Professor was not found!`
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        body: data,
                        message: "Professor was deleted successfully!"
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    success: false,
                    body: null,
                    message: err.message || `Could not delete Professor with id= ${id}`
                });
            });
    }

    static getStudentById(){

    }

    static getAllStudents(){

    }
}
