 
import UserRepository from "../repository/implementation/UserRepository.js";
import PasswordServices from "../infrastructure/services/PasswordServices.js";

 class LoginUser{
    constructor(userRepository=new UserRepository(),passwordServices=new PasswordServices()){
      this.userRepository=userRepository
      this.passwordServices=passwordServices
    }
    async excute(email,password){
        try {
            const existingUser=await this.userRepository.findByemail(email)
            if(existingUser){
                throw new Error('User already exists');
            }
          const isPasswordValid=await this.passwordServices.comparePassword(password)

        } catch (error) {
            console.log(error);
        }
    }
 }

 export default LoginUser