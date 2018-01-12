var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "String is required"
        },
        password: {
          type: String,
          trim: true,
          validate: [
            function(input) {
              return input.length >= 6;
            },"Longstring should be longer."
          ]
        },
        email: {
          type: String
          //unique: true,
          //match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
        },
        userCreated: {
          type: Date,
          default: Date.now
        }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
