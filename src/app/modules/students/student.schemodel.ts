import { model, Schema } from 'mongoose';
//import bcrypt from 'bcrypt';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';
//import config from '../../config';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
  },
  middleName: { type: String },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});

const studentSchema = new Schema<Student>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'user is required'],
      unique: true,
      ref: 'userModel',
    },
    name: {
      type: userNameSchema,
      trim: true,
      required: [true, 'Student name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'others'],
        message: '{VALUE} is not a supported gender',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Email is required'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Email format is invalid'],
    },
    contactNo: {
      type: String,
      required: [true, 'Contact number is required'],
      match: [/^\d{10}$/, 'Contact number must be 10 digits'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
      match: [/^\d{10}$/, 'Emergency contact number must be 10 digits'],
    },
    bloogGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddres: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian details are required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian details are required'],
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'academicsemesters',
    },
    profileImg: { type: String },
  },
  { timestamps: true },
);

// middleware/hook

//document middleware
// studentSchema.pre('save', async function (next) {
//   //hash dat into db
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));
//   next();
// });

// studentSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// query middleware

// model part
export const studentModel = model<Student>('Student', studentSchema);
