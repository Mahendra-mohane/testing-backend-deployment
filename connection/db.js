const mongoose=require('mongoose');

// const connection=mongoose.connect("mongodb+srv://mahendra:mohane@cluster0.9gllbpu.mongodb.net/fullstack2?retryWrites=true&w=majority");

require('dotenv').config();
const connection=mongoose.connect(process.env.mongoUrl);

module.exports=connection