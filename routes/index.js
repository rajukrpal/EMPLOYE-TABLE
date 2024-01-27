var express = require('express');
var router = express.Router();
const emoloyeModel = require("../model/employe");
const path = require("path");


const multer = require("multer");
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"public/upload")
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload = multer({
  fileFilter: function(req, file, cb) {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/gif') {
      return cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only PNG, JPG, and GIF images are allowed.'));
    }
  },
  storage: storage
});




/* GET home page. */
router.get('/', function(req, res) {
  res.render('add-employe');
});


router.post('/',upload.single('profilePhoto'), async(req, res)=> {
  try {
    const creatPostEmploye = await emoloyeModel.create({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      dob:req.body.dob,
      designation:req.body.designation,
      profilePhoto: req.file.filename,
      gender:req.body.gender,
    })
    console.log(creatPostEmploye)
    res.redirect('/all/employe');
  } catch (error) {
    console.log("ERROR-->",error);
  }
});


router.get('/all/employe', async(req, res, next)=> {
  const allEmploy = await emoloyeModel.find().sort({ createdAt: -1 });
  res.render('all-employe',{data:allEmploy});
  next()
});


router.get('/edit-employe/:id', async(req,res,next)=>{
  const item = await emoloyeModel.findOne({ _id:req.params.id })
  res.render('edit-employe',{item})
})


router.put('/edit-employe/:id', upload.single('profilePhoto'), async (req, res, next) => {
  let updateFields = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dob: req.body.dob,
    designation: req.body.designation,
    gender: req.body.gender,
  };
  // Check if a new profile photo is uploaded
  if (req.file) {
    updateFields.profilePhoto = req.file.filename;
  }
  const item = await emoloyeModel.updateOne({ _id: req.params.id }, { $set: updateFields }, { new: true });
  res.redirect('/all/employe');
  next();
});


router.delete('/delete-employe/:id', async (req, res) => {
  try {
    await emoloyeModel.deleteOne({ _id: req.params.id });
    // console.log('Employee deleted successfully');
    res.redirect('/all/employe');
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).send('Internal Server Error');
  }
});




module.exports = router;
