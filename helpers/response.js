function success(res, data, statusCode) {
    return res.status(statusCode).json({
        success: true,
        data: data
    })
}

function error(res, err, statusCode){
    return res.status(statusCode).json({
        success: false,
        error: err
    })
}

module.exports = {
    success,
    error
};