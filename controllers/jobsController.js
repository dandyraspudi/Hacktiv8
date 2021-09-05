const {
    Job,
    Company,
    User
} = require('../models/');

class JobsController {

    static async getCompanies(req, res, next) {
        try {
            const findCompanies = await Company.findAll();
            res.status(200).json(findCompanies);
        } catch (err) {
            next(err)
        }
    }

    static async getJobs(req, res, next) {
        try {
            const findJobs = await Job.findAll({
                include: [Company, User]
            });
            res.status(200).json(findJobs);
        } catch (err) {
            next(err)
        }
    }

    static async postJobs(req, res, next) {
        const {
            title,
            description,
            jobType,
            companyId
        } = req.body;

        try {
            const result = await Job.create({
                title,
                description,
                imgUrl: req.body.imgUrl,
                jobType,
                authorId: req.user.id,
                companyId
            });

            if (result) {
                res.status(201).json(result);
            } else {
                next({
                    name: "SequelizeValidationError"
                })
            }
        } catch (err) {
            next(err)
        }
    }

    static async getIdJobs(req, res, next) {
        const {
            id
        } = req.params;
        try {
            const result = await Job.findByPk(id, {
                where: {
                    id
                }
            })
            if (result) {
                res.status(200).json(result)
            } else {
                next({
                    name: "NotFound",
                    message: `Job id ${id} not found`
                })
            }
        } catch (err) {
            next(err)
        }
    }

    static async putIdJobs(req, res, next) {
        const {
            title,
            description,
            imgUrl,
            jobType,
            authorId,
            companyId
        } = req.body;

        const {
            id
        } = req.params;

        try {
            const job = await Job.findByPk(id);
            if (job) {
                const dataUpdate = await Job.update({
                    title,
                    description,
                    imgUrl,
                    jobType,
                    authorId,
                    companyId
                }, {
                    where: {
                        id
                    },
                    returning: true
                });
                res.status(200).json(dataUpdate[1][0])
            } else {
                next({
                    name: 'NotFound',
                    message: `Jobs id ${id} not found`
                })
            }
        } catch (err) {
            if (err.name === 'SequelizeValidationError') {
                let error = err.errors.map(item => item.message)
                next({
                    message: error,
                    name: "SequelizeValidationError"
                })
            } else {
                next(err)
            }
        }
    }

    static async putIdDeleteJobs(req, res, next) {
        const {
            id
        } = req.params;
        try {
            const result = await Job.findByPk(id)
            if (result) {
                await Job.destroy({
                    where: {
                        id
                    }
                })
                res.status(200).json({
                    message: `User ${id} success to delete`
                })
            } else {
                next({
                    name: "NotFound",
                    message: `Job id ${id} not found`
                })
            }
        } catch (err) {
            next(err)
        }
    }

}

module.exports = JobsController;