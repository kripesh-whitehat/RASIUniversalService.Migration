
const StatusCode = {
    SUCCESS: 200,
    ERROR: 400
}

function successResponse(res, message, data, statusCode = StatusCode.SUCCESS) {
    const successBody = { status: true, message: message }
    if (data) successBody['data'] = data
    return res.status(statusCode).json(successBody);
}

function errorResponse(res, message, statusCode = StatusCode.ERROR) {
    return res.status(statusCode).json({ status: false, message: message })
}


module.exports = {
    successResponse,
    errorResponse,
    StatusCode
}