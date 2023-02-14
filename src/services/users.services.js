const Users = require('../models/users.model');

class UserServices {
    static async getAll (){
        try {
            const result = await Users.findAll()
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async create(user) {
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async update(updatedData, id){
        try {
            const userArray = await Users.findByPk(id);
            console.log(userArray);
            if ( !id ){
                console.log('Id not found');
            } 
            await userArray.update(updatedData);
            return userArray;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id){
        try {
            const user = await Users.findByPk(id);
            if(!user){
                console.log('User not found')
            }
            await user.destroy();
            return { message: 'User deleted successfully' };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;