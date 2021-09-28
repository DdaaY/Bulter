const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    
    username: { type: String,  },
    password: { type: String,minlength: 8, maxlength: 16, trim: true },
    email: { type: String, lowercase: true, trim: true, maxlength: 150 },
    first_name: { type: String, maxlength:50 },
    last_name: { type: String, maxlength:50 },
    gender: { type: String, trim: true },
    dob: { type: Date },
    phone_number: { type: String, trim: true },
    
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },

    date_created: { type:Date },
    POI: [
        {
            alias: {type: String },
            location: { type: [Number], index: { type: '2dsphere', sparse: true} },
        }
    ]

}, {
    timestamps: true,
});



// const userSchema = new Schema ({
    
//     username: { type: String, required: true },
//     password: { type: String, reuqired: true, minlength: 8, maxlength: 16, trim: true },
//     email: { type: String, lowercase: true, trim: true, required: true, maxlength: 150 },
//     first_name: { type: String, reuqired: true, maxlength:50 },
//     last_name: { type: String, reuqired: true, maxlength:50 },
//     gender: { type: String, trim: true },
//     dob: { type: Date, required: true },
//     phone_number: { type: String, trim: true },
    
//     street: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String },
//     zipcode: { type: String, required: true },

//     date_created: { type:Date, required: true },
//     POI: [
//         {
//             alias: {type: String, required: true },
//             location: { type: [Number], index: { type: '2dsphere', sparse: true} },
//         }
//     ]

// }, {
//     timestamps: true,
// });

const User = mongoose.model('User',userSchema);

module.exports = User;