const {
    User
} = require('../models/')
const {
    decode
} = require('../helper/bcryptjs')
const {
    sign
} = require('../helper/jwt')

class UserController {

    static async userList(req, res, next) {
        try {
            const result = await User.findAll()
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async findById(req, res, next) {
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

    static async deleteById(req, res, next) {
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

    static async postRegister(req, res, next) {
        const {
            name,
            email,
            password,
            role
        } = req.body;

        try {
            const createUser = await User.create({
                name,
                email,
                password,
                role
            });

            const data = {
                id: createUser.id,
                email: createUser.email
            }

            const token = sign(data)
            res.status(201).json({
                token
            });
        } catch (err) {
            next(err);
        }
    }

    static async postLogin(req, res, next) {
        try {
            const {
                email,
                password
            } = req.body;

            const findUser = await User.findOne({
                where: {
                    email
                }
            });

            if (findUser) {
                const isValid = decode(password, findUser.password)
                if (isValid) {
                    const token = sign({
                        id: findUser.id,
                        email: findUser.email,
                        role: findUser.role,
                        name: findUser.name
                    });
                    console.log(token);
                    res.status(201).json({
                        token
                    });
                } else {
                    next({
                        name: 'InvalidEmailPass'
                    })
                }
            } else {
                next({
                    name: 'InvalidEmailPass'
                })
            }
        } catch (err) {
            next(err);
        }
    }

}

module.exports = UserController