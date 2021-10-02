const router = require('express').Router();
let User = require('../models/user');




router.route('/:email').get((req,res)=>{
    const email = req.params.email;

    User.find({email: email})
    .then(users => {
        res.json(users);
    })
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/add').post((req,res) => {

    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({email,password});

    newUser.save()
    .then(()=> res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


//to start the server, cd to back-end folder, then type 'nodemon server'