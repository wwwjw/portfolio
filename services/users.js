'use strict';
/**
 * 유저 서비스단
 */
class User {

    /**
     * 로그인
     * @param email 이메일
     * @param password 비밀번호
     */
    async login(data){
        try{
            // 유저테이블 조회
            const user = `select * from users where email = ${data.email}`;

            // 가입여부
            if(user == null) {               
                // 유저등록
                return await create(data);

            }else{
                // 비밀번호 확인
                if(data.password === user.password){
                    // 로그인
                    return {useridx: user.useridx, nickname: user.nickname};
                }else{
                    throw new Error(`이메일 또는 비밀번호를 확인해주세요.`);
                }
                
            }
        }catch(e){
            throw new Error(e);
        }
    }

    /**
     * 유저등록
     * @param email 이메일
     * @param password 비밀번호
     */
    async create(data){
        try{
            // 유저테이블 등록
            const user = `insert into users (email, password) values (${email}, ${password})`;

            return {useridx: user.useridx, nickname: user.nickname}; 
        }catch(e){
            throw new Error(e);
        }
    }
};

module.exports = new User();