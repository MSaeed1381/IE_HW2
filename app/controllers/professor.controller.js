import db from '../models/index.js'
const Professor = db.professors;

export default class ProfessorController {
    static create(req, res){

        if (!req.body.full_name) { // TODO
            res.status(204).json({
                success: false,
                body: null,
                message: "Content can not be empty!"
            });
            return;
        }

        const professor = new Professor(req.body);

        // Save Professor in the database
        professor
            .save(professor)
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
                        err.message || "Some error occurred while creating the Professor."
                });
            });
    }

    static update(req, res){
        console.log()
        if (!Object.keys(req.body).length) { // TODO
            res.status(400).json({
                success: false,
                body: null,
                message: "Content can not be empty!"
            });
            return;
        }
        const id = req.params.id;
        Professor.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
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
                    message: "Professor Updated Successfully"
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

            Professor.findByIdAndRemove(id)
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

         static getAllProfessors(req, res){
            Professor.find().then((data)=>{
                res.status(200).json({
                    success: true,
                    body: data,
                    message: "Professor was deleted successfully!"
                });
            }).catch((err)=>{
                res.status(500).json({
                    success: false,
                    body: null,
                    message: err.message || `Could not get all Professors.`
                });
            })
         }
         static getProfessorById(req, res){
            const id = req.params.id;
            Professor.findById(id).then((data)=> {
                if (!data) {
                    return res.status(404).json({
                        success: false,
                        body: null,
                        message: `Professor with id ${id} not found.`
                    });
                }
                return res.status(200).json({
                    success: true,
                    body: data,
                    message: `get Professor with id ${id}.`
                })
            }).catch(err => {
                return res.status(500).json({
                    success: false,
                    body: null,
                    message: err.message || `Could not get the Professor.`
                })
            })
         }
}
