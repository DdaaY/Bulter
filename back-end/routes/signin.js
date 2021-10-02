const router = require('express').Router();
let User = require('../models/user');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:email').get((req,res) => {
    const email = req.params.email;

    User.find({email:email})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;


//to start the server, cd to back-end folder, then type 'nodemon server'