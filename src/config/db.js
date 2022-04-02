
const mongoose =require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://ketan:ketan123@cluster0.pvb7r.mongodb.net/file_upload?retryWrites=true&w=majority")}