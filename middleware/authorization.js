const {
    User,
    Job
} = require('../models/');

const authorization = async (req, res, next) => {
    const jobId = req.params.id;

    const {
        id,
        role
    } = req.user

    try {
        const foundJob = await Job.findByPk(jobId)
        if (role === "admin") {
            next()
        } else {
            if (!foundJob) {
                next({
                    name: "NotFound"
                })
            } else {
                next({
                    name: "Forbiden"
                })
            }
        }
    } catch (error) {
        next(err)
    }
}

module.exports = authorization;