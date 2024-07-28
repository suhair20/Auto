
// userController.js
import SignupUser from '../../useCases/userCases/SignupUser.js'
import PasswordService from '../../infrastructure/services/PasswordServices.js'
import UserRepository from '../../repository/implementation/UserRepository.js'
import OtpService from '../../infrastructure/services/OTP.js'
import Otpverifying from '../../useCases/userCases/OtpVerifying.js'
import Resendotp from '../../useCases/userCases/Resendotp.js'
import LoginUser from '../../useCases/userCases/LoginUser.js'


class UserController {
    constructor(userRepository=new UserRepository(),
                 passwordService=new PasswordService(),
                  signupUser=new SignupUser() ,
                   otpService = new OtpService(),
                   otpverifying=new Otpverifying(),
                    resendotp=new Resendotp(),
                     loginuser=new LoginUser()  
                    
     ) {
                this.userRepository = userRepository;
                 this.passwordService = passwordService;
                  this.signupUser = signupUser
                   this.otpService =otpService
                   this.otpverifying=otpverifying
                   this.resendotp=resendotp
                   this.loginuser=loginuser
                 
       }

    signup = async (req, res,next) => {
        try {
            const { name, password,email } = req.body;
            console.log(password,"pass");
            const user = await this.signupUser.execute(name,password,email)
            await this.otpService.sendOtp(email)
        
            res.status(201).json({ success: true, user });
        } catch (error) {
            console.log(error);
            next(error); 
        }
    }

  /*OTP VERIFICATION*//////////////


    verifyOtp=async(req,res,next)=>{
        try {
            console.log("vnnitilla");
            const {email,otp}=req.body
            console.log("yvide");
            console.log(req.body);
            const result=await this.otpverifying.excute(email,otp)
            res.status(201).json({ message: 'user created', result });
        } catch (error) {
            console.log(error);
            next(error); 
        }
    }

/*resend OTP*///////////////////////
    resendingOtp=async(req,res,next)=>{
        try {
            console.log('resend otp');
            const {email}=req.body
            await this.resendotp.excute(email)
           

        } catch (error) {
            next(error)
            console.log(error);
        }
    }


////////* user LOGIN   *///////////

 login= async(req,res,next)=>{
    try {
        const {email,password}=req.body
        const Token =await this.loginuser.excute(email,password)
        res.cookie('token',Token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite:'strict',
            maxAge: 24 * 60 * 60 * 1000, 
        })
        res.status(201).json({ success: true, Token });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error.message })
        next(error)
    }
 }



}

export default UserController;
