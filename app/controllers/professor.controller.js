import db from '../models/index.js'
const Professor = db.professors;

export default class ProfessorController {
    static create(req, res){

        if (!req.body.full_name) { // TODO
            res.status(400).json({
                success: false,
                body: null,
                message: "Content can not be empty!"
            });
            return;
        }

        const professor = new Professor({
            full_name: req.body.full_name,
            user_id: req.body.user_id,
            password_hash: req.body.password_hash,
            email: req.body.email,
            phone: req.body.phone,
            college: req.body.college,
            field: req.body.field,
            rank: req.body.rank,
        });

        // Save Professor in the database
        professor
            .save(professor)
            .then(data => {
                res.status(200).json({
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
                    res.json({
                        success: false,
                        body: null,
                        message: "Professor not found"
                    });
                    return;
                }
                res.json({
                    success: true,
                    body: req.body,
                    message: "Professor Updated Successfully"
                });
                }
            )
            .catch((err)=>{
                res.json({
                    success: false,
                    body: null,
                    message: err.message || "Some error occurred while updating the Professor."
                })
            })
    }
}