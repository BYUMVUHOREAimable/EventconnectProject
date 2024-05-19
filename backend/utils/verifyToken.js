// const jwt = require('jsonwebtoken')
// require('dotenv').config()

// const verifyToken = (req,res,next) => {
//     const token = req.cookies.accessToken
    
//     if(!token) {
//         return res.status(401).json({success: false, message: "You're not authorized"})
//     }

//     //IF TOKEN IS EXIST THEN VERIFY THE TOKEN 
//     jwt.verify(token, process.env.JWT_SECRET_KEY,(err, user)=>{
//         if(err){
//             return res.status(401).json({success: false, message: "Token is invalid"})
//         }
//         req.user = user
//         next()  // DON'T FORGET TO CALL NEXT
//     })
// }

// const VerifyUser = (req,res,next)=>{
//     verifyToken(req,res,next, ()=>{
//         if(req.user.id === req.params.id || req.user.email === `${process.env.MY_EMAIL}`){
//             next();
//         } else {
//           return  res.status(401)
//                .json({ success: false, message: "You're not authenticated"});
//         }
//     })
// }

// const VerifyAdmin = (req,res,next) => {
//     verifyToken(req,res,next, () => {
//         if(req.user.email === `${process.env.MY_EMAIL}`){
//             next();
//         } else {
//           return  res.status(401)
//                .json({ success: false, message: "You're not authorized"});
//         }
//     })
// }

// module.exports = { verifyToken, VerifyAdmin, VerifyUser};
