const  UserServices  = require('../services/users.services');

const getAllUsers = async (req, res) => {
    try {
        const users = await UserServices.getAll();
        res.json(users);
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await 
        UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const updateUser = req.body;
        const { id } = req.params;
        const result = await UserServices.update(updateUser, id);
        res.json(result);
    } catch {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}