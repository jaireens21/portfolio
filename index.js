if(process.env.NODE_ENV!=='production'){
  require('dotenv').config();
 }

const express=require('express');
const app=express();

const path=require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'/public')));

const nodemailer = require('nodemailer'); 

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/", (req,res)=>{
  return res.render('home2.ejs',{showAlert:false});
})


app.post("/", (req,res)=>{

  const{name,email,message}=req.body;
    
  //send email with message 
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:process.env.EMAIL_ADDRESS,
      pass:process.env.EMAIL_PASSWORD
    },
  });
  const mailOptions = {
    to: 'jaireen.s21@gmail.com',
    from: 'jaireen.s21@gmail.com',
    subject: 'NEW MESSAGE: from portfolio page',
    text: 'Hello,\n\n' +
    `You received a message on your portfolio page. \n\n` + 
    `From: ${name} ( ${email} ) \n` +
    `Message: ${message}`
  };
  transporter.sendMail(mailOptions,(err)=>{
    if(err){
      console.log(err);
      return res.render('home2.ejs',{showAlert:true,success:false});
    }else{
      console.log("email sent!");
      return res.render('home2.ejs',{showAlert:true,success:true});
    }
  })
   
  
})



app.listen(3000, ()=>{
    console.log("listening on port 3000");
})
