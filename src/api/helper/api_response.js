const httpStatus = require('http-status');

exports.successRes = (res, message, result) => {
    const response = {
        status: 'success',
        message: message,
        result: result
    };

    return res.status(httpStatus.OK).send(response);
};

exports.createdRes = (res, message, result) => {
    const response = {
        status: 'success',
        message: message,
        result: result
    };

    return res.status(httpStatus.CREATED).send(response);
};

exports.notFoundRes = (res, message) => {
    const response = {
        status: 'error',
        message: message,
        result: []
    };

    return res.status(httpStatus.NOT_FOUND).send(response);
};