const User = require("../models/User")

exports.show = async(req, res, next) => {
        const user =  await User.find()
        return res.json(user)
}
exports.response = (req, res, next) => {

    return res.send("success")
}
exports.login = (req, res, next) => {
    
    return res.send(req.body)
  }