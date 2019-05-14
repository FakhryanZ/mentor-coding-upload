const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  profilePic: {
    type: String, 
    default: "noprofile.jpg"
  },
  description: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  job: {
    type: String,
    default: null
  },
  isMentor: {
    type: Boolean,
    default: false
  },
  socialMedia: {
    github: {
      type: String,
      default: null
    },
    linkedin: {
      type: String,
      default: null
    },
    facebook: {
      type: String,
      default: null
    },
    instagram: {
      type: String,
      default: null
    }
  },
  educations: {
    type: [{
      name: String,
      dateIn: Date,
      dateOut: Date
    }],
    default: []
  },
  skills: {
    type: [String],
    default: []
  },
  projects: {
    type: [{
      name: String,
      description: String,
      linkProject: String
    }],
    default: []
  },
  reviews: {
    type: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      rating: Number,
      review: String
    }],
    default: []
  }
});

module.exports = mongoose.model("User", UserSchema);
