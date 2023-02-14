const { Router } = require('express');
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controllers');

const router = Router();

router.get('/users', getAllUsers);
router.post('/users/new', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser)

module.exports = router;