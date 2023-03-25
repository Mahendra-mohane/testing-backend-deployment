const mongoose=require('mongoose')

const noteSchema=mongoose.Schema({ //kaunsa user wo  note 
    title:String,
    sub:String,
    body:String,
    userID:String //user==> note ==> "_id" <== wo jayega
},{
    versionKey:false
})

const NoteModel=mongoose.model("note",noteSchema);
module.exports=NoteModel;