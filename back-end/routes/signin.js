const router = require('express').Router();
let User = require('../models/user');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/check').get((req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.find({email:email , password: password})
    .then(response => console.log(res))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


//to start the server, cd to back-end folder, then type 'nodemon server'