const UserService = require("../../services/UserService");


class UserController{

    getCurrentUser = (req, res) => {
        res.status(200).json(req.user);
    }

    getAllUser = (req, res) => {
            UserService.getAllUsers()
                .then(users => res.status(200).json(users))
                .catch(error => res.status(error.code).json({error : error.error}));
        }
    
}

module.exports = new UserController();