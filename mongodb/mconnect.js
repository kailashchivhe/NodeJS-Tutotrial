var mongoose  = require('mongoose');

const URL = "mongodb+srv://kailash:kailash15@kaicluster-vrlr2.mongodb.net/test?retryWrites=true&w=majority";
var StudentSchema = new mongoose.Schema({name:String,email:String,address:String},{versionKey : false});
var StudentModel = mongoose.model("student",StudentSchema);

mongoose.connect( URL, {useNewUrlParser: true,useUnifiedTopology: true});

//Insert Mongodb
var newStudent = new StudentModel( {name:"xyz",email:"x@gmailcom",address:"pune"});
newStudent.save((err,data)=>{
  if( err == null ){
    console.log("Data inserted");
  }
  else{
    console.log(err);
  }
});

//Update Mongodb
StudentModel.findOne( {name:"xyz"},(err,data)=>{
  if( err == null )
  {
    data.name = "kai";
    data.email = "kai@gmail.com";

    data.save((err1)=>{
      if(err1 == null){
        console.log(" Record updated");
      }
      else{
        console.log(err1);
      }
    });
  }
  else
  {
      console.log(err);
  }
});

//Delete Mongodb
StudentModel.remove({name:"kai"},(err,data)=>{
  if( err == null )
  {
    console.log("Deleted");
  }
  else
  {
      console.log(err);
  }
});

//Display all
StudentModel.find( (err,data)=>{
      if( err == null )
      {
        console.log(data);
      }
      else
      {
          console.log(err);
      }
      mongoose.disconnect();
});
