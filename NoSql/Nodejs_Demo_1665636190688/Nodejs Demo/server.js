var express = require('express');
const app = express();
var mongoose = require('mongoose')

var bodyParser = require('body-parser');
var helmet = require('helmet');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());


mongoose.connect('mongodb://localhost:27017/students')


const student_details = mongoose.model('student_details',
                                        new mongoose.Schema({
                                          _id: Number,
                                          name: String,
                                          cgpa:Number,
                                          gender: String,
                                          hobbies: Array,
                                          honours: String
                                        })
)


app.listen(4000, () => {
  console.log("Application started and Listening on port 3000");
});


app.get("/", (req, res) => {
    res.sendFile(__dirname+'/index.html')
});


app.post('/register', async(req, res) => {
  if (await student_details.findOne({ _id:req.body.id })) {
    // return res.send('User '+req.body.name +' Already Exists')    
    return res.send(req.body)
  }
  student_details.insertMany({
    _id: req.body.id,
    name: req.body.name,
    cgpa: req.body.cgpa,
    gender: req.body.gender,
    hobbies: req.body.hobbies,
    honours: req.body.honours
  })
  return res.send('User ' + req.body.name + ' Added successfully')
})

app.post('/searchById', async (req, res) => {
  var r = await student_details.find({_id:req.body.id})
  return res.send(r)
})


app.post('/searchByName', async (req, res) => {
  return res.send(await student_details.find({name:req.body.name}))
})


app.post('/searchByGender', async (req, res) => {
  return res.send(await student_details.find({gender:req.body.gender}))
})


app.post('/searchByHobbies', async (req, res) => {
  var result = []
  for (const key of req.body.hobbies) {
    result.push(await student_details.find({hobbies:{$in:[key]}}))
  }
  return res.send(result)
})


app.post('/searchByHonours', async (req, res) => {
  return res.send(await student_details.find({honours:req.body.honours}))
})


app.post('/searchByCGPA', async (req, res) => {
  return res.send(await student_details.find({$and:[{$gt:req.body.cgpag},{$lt:req.body.cgpal}]}))
})