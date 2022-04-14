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
    return res.render('home.ejs');
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
    }
  })
//   req.flash('success', 'Your message has been received. Thank you for reaching out!');
  console.log("email sent!");
  //error in alert
  return alert("Thank you for reaching out!Your message has been received. I will get in touch with you shortly.");
  
})

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})
