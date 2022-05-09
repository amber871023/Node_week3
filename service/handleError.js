const errorMsg = require('./errorMsg');

function handleError(res, msg = errorMsg.DEFAULT){
    res.status(400).send({
        "status": false,
        "message": msg
    }).end();
}

module.exports = handleError;
