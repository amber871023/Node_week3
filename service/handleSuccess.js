function handleSuccess(res,data) {
  res.send({ 
    "status": true,
     data
  }).end();
  // res.end();
}
module.exports = handleSuccess;
