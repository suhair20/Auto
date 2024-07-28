import UserInterface from "../interfaces/DriverInterface.js";
import DriverModel from "../../infrastructure/database/model/driverModel.js"



class DriverRepository extends UserInterface{
 
    async findByUsername(name){
        console.log("usermodel is hwer");
        return await DriverModel.findOne({name})
    }

    async findByemail(email){
        return await DriverModel.findOne({email})
    }

    async save(userdata){
        try {
            console.log("vanu");
            const user= new DriverModel(userdata)

            return await user.save()
            
        } catch (error) {
            console.log(error.message);
        }
      
    }

    async  updateUserVerificationStatus(email,isVerified){
        try {
    console.log('nice');
            const Driver= await this.findByemail(email)
            if(user){
              Driver.isVerified=isVerified
              return await Driver.save();
            }else{
                throw new Error('Driver not found')
            }
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default DriverRepository
