import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
});
const EmployeeType = mongoose.model('EmployeeType', schema);
export default EmployeeType;
