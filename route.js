'use strict';

const {Router} = require('express');
const asyncHandler = require('express-async-handler');

/**
 * 라우터 설정
 */
const routerSet = () => {
    const router = Router();

    router.post('/user/login', asyncHandler(userController.login));

    return router;
}

module.exports = routerSet;