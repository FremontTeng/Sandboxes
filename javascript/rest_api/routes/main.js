const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', (request, response)=>{
    console.log("Hi:");
    response.send('Hello world');
});

router.get('/status', (request, response)=>{
    response.cookie('testing', 'test');
    response.status(200).json({ message: 'ok', status: 200});
});

router.get('/status2', (request, response)=>{
    console.log(request.cookies);
    response.status(200).json({ message: 'ok', status: 200});
});

router.post('/signup', passport.authenticate('signup', {session: false}), (request, response, next)=>{
//    next(new Error('test'));
    console.log(request.body);
    if (!request.body){
        response.status(400).json({message: 'invalid body', status: 400});
    }
    else
        response.status(200).json({ message: 'ok', status: 200});
});

router.post('/login', (request, response)=>{

    passport.authenticate('login', (error, user)=>{
        try{
            if(error){
                return next(error);
            }
            if(!user){
                return next(new Error('Email and password are required'));
            }
            request.login(user, {session: false}, (err)=>{

                if (err) return next(err);
                return response.status(200).json({user, status: 200});
            })
        }catch (err){
            console.log(err);
            return next(err);
        }
    })(request, response, next);
    console.log(request.body);
    if (!request.body){
        response.status(400).json({message: 'invalid body', status: 400});
    }
    else
        response.status(200).json({ message: 'ok', status: 200});
});

router.post('/logout', (request, response)=>{
    console.log(request.body);
    if (!request.body){
        response.status(400).json({message: 'invalid body', status: 400});
    }
    else
        response.status(200).json({ message: 'ok', status: 200});
});

router.post('/token', (request, response)=>{
    if (!request.body || !request.body.refreshToken){
        response.status(400).json({message: 'invalid body', status: 400});
    }
    else {
        const refreshToken = request.body;
        response.status(200).json({ message: `refresh token requested for token ${refreshToken}`, status: 200});
    }   
});

router.get('/test', (request, response)=>{
    //console.log(request);
    response.send('Test');
});

module.exports = router;