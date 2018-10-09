exports.sendErrors = (res, err) => {
  res.status(500)
  res.send(err)
}