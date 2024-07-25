
// userController.js
import SignupUser from '../../useCases/SignupUser.js'
import PasswordService from '../../infrastructure/services/PasswordServices.js'
import UserRepository from '../../repository/implementation/UserRepository.js'
import OtpService from '../../infrastructure/services/OTP.js'
import Otpverifying from '../../useCases/OtpVerifying.js'
import Resendotp from '../../useCases/resendOtp.js'
import LoginUser from '../../useCases/LoginUser.js'


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
            const { name, Password,email } = req.body;
            console.log(Password);
            const user = await this.signupUser.excute(name,Password,email)
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
        const user =await this.loginuser.excute(email,password)
        res.status(201).json({ success: true, user });
    } catch (error) {
        console.log(error);
        next(error)
    }
 }



}

export default UserController;
