'use strict';

const userService = require('../services/users');

/**
 * 유저 컨트롤단
 */
class User {
    /**
     * 유저 로그인
     * @param {*} req, email, password 
     * @param {*} res 
     */
    async login(req, res){
        const result = await userService.login(req.body);
        res.json(result);
    }
};

module.exports = new User();