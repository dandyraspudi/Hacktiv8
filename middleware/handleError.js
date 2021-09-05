const handleError = (err, req, res, next) => {
    let code = 500;
    let message = ["internal server error"];

    console.log(err);

    switch (err.name) {
        case "SequelizeValidationError":
            code = 400;
            message = [err.name];
            break;
        case "NotFound":
            code = 404;
            message = [err.message];
            break;
        case "NotAuthorized":
            code = 401;
            message = [err.name];
            break;
        case "Forbiden":
            code = 403;
            message = [err.name];
            break;
        case "InvalidEmailPass":
            code = 401;
            message = ["Wrong Email and Password"];
            break;
        default:
            break;
    }

    res.status(code).json({
        message
    });
}

module.exports = handleError