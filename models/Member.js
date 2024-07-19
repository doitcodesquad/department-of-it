import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MemberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  memberType: {
    type: String,
    default: "newbie",
    //Core , member , newbie
  },
  isOutsider: {
    type: Boolean,
    deafult: false,
  },
  club: {
    type: String,
  },
  college: {
    type: String,
    default: "Central University of kashmir",
  },
  department: {
    type: String,
    default: "Information Technology",
  },
  programme: {
    type: String,
  },
  course: {
    type: String,
  },
  bio: {
    type: String,
  },
  semester: {
    type: String,
  },
  socials: [
    {
      platform: {
        type: String,
        required: true,
        enum: ["facebook", "twitter", "linkedin", "instagram", "github"],
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

MemberSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

MemberSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw new Error(err);
  }
};

MemberSchema.methods.changePassword = async function (newPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(newPassword, salt);
    await this.save();
  } catch (err) {
    throw new Error(err);
  }
};

const Member = mongoose.models.Member || mongoose.model("Member", MemberSchema);

export default Member;
