import Joi from 'joi';
import {model, Schema} from 'mongoose';

const userSchema = new Schema (
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
    { timestamps: true},
);

userSchema.pre('save', async function() {
  if (!this.username) {
    this.username = this.email;
  }
});

userSchema.methods.toJSON = function () {
  const ogj = this.toObject();
  delete obj.password;
  return obj;
}

export const User = model('User', userSchema);
